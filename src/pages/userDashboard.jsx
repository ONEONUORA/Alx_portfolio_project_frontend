
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import Footer from "../components/footer";
import Amount from "../components/userWalletAmount";
import AnimationWrapper from "../common/page-Animation";
import Header from "../components/header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [chartData, setChartData] = useState({});
  const [currentPrice, setCurrentPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userAuth } = useContext(UserContext); // Updated to avoid destructuring errors
  const { fullname, access_token } = userAuth || {}; // Use optional chaining

  // Fetch the top 50 cryptocurrencies by market cap
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const result = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 50, // Limit to top 50
              page: 1,
            },
          },
        );
        setCryptos(result.data);
      } catch (error) {
        console.error("Error fetching cryptos:", error);
      }
    };

    fetchCryptos();
  }, []);

  // Fetch chart data and current price based on the selected cryptocurrency
  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      try {
        const chartResult = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart`,
          {
            params: { vs_currency: "usd", days: "1" },
          },
        );

        const priceResult = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets`,
          {
            params: {
              vs_currency: "usd",
              ids: selectedCrypto,
            },
          },
        );

        if (chartResult.data && chartResult.data.prices) {
          const data = chartResult.data.prices;
          setChartData({
            labels: data.map((price) =>
              new Date(price[0]).toLocaleDateString(),
            ),
            datasets: [
              {
                label: `${selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price (USD)`,
                data: data.map((price) => price[1]),
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                tension: 0.1,
              },
            ],
          });
        }

        if (priceResult.data && priceResult.data.length > 0) {
          setCurrentPrice(priceResult.data[0].current_price);
        }
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
      setLoading(false);
    };

    if (selectedCrypto) {
      fetchCryptoData();
    }
  }, [selectedCrypto]);

  return access_token == null ? (
    <Navigate to="/signin" />
  ) : (
    <>
      <AnimationWrapper>
        <section className="h-cover items-center justify-center bg-black">
          <p className="float-right mb-1 mt-5 text-sm font-bold capitalize text-white">
            Welcome {fullname} +
          </p>
          <Amount />
          <Header/>

          <div>
            <div>
              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="input-box text-red"
              >
                {cryptos.length > 0 ? (
                  cryptos.map((crypto) => (
                    <option key={crypto.id} value={crypto.id}>
                      {crypto.name}
                    </option>
                  ))
                ) : (
                  <option>Loading Prices...</option>
                )}
              </select>
            </div>

            <div>
              {loading ? (
                <p>Loading data...</p>
              ) : (
                <>
                  <h1 className="mb-1 mt-3 text-center font-gelasio text-xl font-bold capitalize text-white">
                    {selectedCrypto.charAt(0).toUpperCase() +
                      selectedCrypto.slice(1)}{" "}
                    Price Chart
                  </h1>
                  {currentPrice !== null && (
                    <p className="font-semibold text-red">
                      Current Price: ${currentPrice.toLocaleString()}
                    </p>
                  )}
                  {chartData.labels ? (
                    <Line
                      data={{
                        ...chartData,
                        datasets: chartData.datasets.map((dataset) => ({
                          ...dataset,
                          borderColor: "#FF4E4E", // Red color for the line
                          backgroundColor: "rgba(255, 78, 78, 0.2)", // Lighter red color for the fill (optional)
                        })),
                      }}
                      options={{
                        scales: {
                          x: {
                            ticks: {
                              color: "white", // X-axis labels color
                            },
                          },
                          y: {
                            ticks: {
                              color: "white", // Y-axis labels color
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            labels: {
                              color: "white", // Legend text color
                            },
                          },
                          tooltip: {
                            titleColor: "white", // Tooltip title color
                            bodyColor: "white", // Tooltip body color
                            backgroundColor: "rgba(0,0,0,0.7)", // Tooltip background color
                          },
                        },
                      }}
                    />
                  ) : (
                    <p>No data available for this cryptocurrency.</p>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </AnimationWrapper>
    </>
  );
};

export default Dashboard;
