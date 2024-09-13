import { useEffect, useState } from "react";
import axios from "axios";
import landing from "../assets/Landing.jpg";
import AnimationWrapper from "../common/page-Animation";

const HomePage = () => {
  const [cryptoData, setCryptoData] = useState([]); // Full list of cryptocurrencies
  const [filteredData, setFilteredData] = useState([]); // Filtered search results

  useEffect(() => {
    fetchCryptocurrencyData();
  }, []);

  const fetchCryptocurrencyData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        },
      );
      setCryptoData(response.data);
      setFilteredData(response.data); // Set both states to the full list initially
    } catch (error) {
      console.error("Error fetching cryptocurrency data:", error);
    }
  };

  const handleSearch = () => {
    const query = document.getElementById("crypto-search").value.toLowerCase();
    const filtered = cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(query),
    );
    setFilteredData(filtered); // Update the filtered data based on search
  };

  const handleReturn = () => {
    setFilteredData(cryptoData); // Reset the filtered data to the full list
    document.getElementById("crypto-search").value = ""; // Clear the search input
  };

  return (
    <>
      <AnimationWrapper>
        <div
          className="relative min-h-screen bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${landing})` }}
        >
          <section className="absolute inset-0 flex items-center justify-center p-5 text-center">
            <div className="mx-auto w-full rounded-lg bg-black bg-opacity-50 p-5 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              <marquee
                direction="left"
                className="mb-5 text-xl font-semibold text-red sm:text-sm lg:text-2xl"
              >
                WELCOME TO TOKEN FLOW FOR RECENT CRYPTOCURRENCY RATES
              </marquee>

              <div className="flex w-full flex-col items-center gap-5">
                <input
                  type="text"
                  id="crypto-search"
                  placeholder="Search for a cryptocurrency..."
                  className="text-xs w-full rounded-lg px-3 py-1 sm:w-3/4 sm:py-2 sm:text-sm md:w-1/2 md:text-base"
                />
                <button
                  id="search-btn"
                  className="btn-dark"
                  onClick={handleSearch}
                >
                  Search
                </button>

                {/* Conditionally render the return button */}
                {filteredData.length !== cryptoData.length && (
                  <button
                    id="return-btn"
                    className="btn-light"
                    onClick={handleReturn}
                  >
                    Return
                  </button>
                )}
              </div>

              {/* Scrollable table for cryptocurrency data */}
              <div className="mt-5 max-h-[50vh] w-full overflow-x-auto">
                <table
                  id="crypto-table"
                  className="border-gray-700 text-xs mx-auto mt-5 w-full border-collapse p-5 text-white sm:text-sm md:text-base"
                >
                  <thead className="bg-gray-800">
                    <tr className="border-gray-600 border-b">
                      <th className="px-2 py-2 text-left font-bold sm:px-4">
                        Icon
                      </th>
                      <th className="px-2 py-2 text-left font-bold sm:px-4">
                        Currency
                      </th>
                      <th className="px-2 py-2 text-left font-bold sm:px-4">
                        Price (USD)
                      </th>
                      <th className="px-2 py-2 text-left font-bold sm:px-4">
                        24h Change (%)
                      </th>
                      <th className="px-2 py-2 text-left font-bold sm:px-4">
                        Market Cap (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((crypto) => (
                      <tr key={crypto.id} className="border-gray-600 border-b">
                        <td className="px-2 py-2 sm:px-4">
                          <img
                            src={crypto.image}
                            alt={crypto.name}
                            style={{ width: "24px" }}
                            className="sm:w-8"
                          />
                        </td>
                        <td className="px-2 py-2 sm:px-4">{crypto.name}</td>
                        <td className="px-2 py-2 sm:px-4">
                          ${crypto.current_price.toFixed(2)}
                        </td>
                        <td
                          className={`px-2 py-2 font-semibold sm:px-4 ${
                            crypto.price_change_percentage_24h >= 0
                              ? "text-twitter"
                              : "text-red"
                          }`}
                        >
                          {crypto.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        <td className="px-2 py-2 sm:px-4">
                          ${crypto.market_cap.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default HomePage;
