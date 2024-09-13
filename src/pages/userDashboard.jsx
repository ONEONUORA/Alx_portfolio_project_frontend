// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Line } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// // const Dashboard = () => {
// //   const [cryptos, setCryptos] = useState([]);
// //   const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
// //   const [chartData, setChartData] = useState({});
// //   const [currentPrice, setCurrentPrice] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   // Fetch the top 50 cryptocurrencies by market cap
// //   useEffect(() => {
// //     const fetchCryptos = async () => {
// //       try {
// //         const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
// //           params: {
// //             vs_currency: 'usd',
// //             order: 'market_cap_desc',
// //             per_page: 50, // Limit to top 50
// //             page: 1,
// //           },
// //         });
// //         setCryptos(result.data);
// //       } catch (error) {
// //         console.error('Error fetching cryptos:', error);
// //       }
// //     };

// //     fetchCryptos();
// //   }, []);

// //   // Fetch chart data and current price based on the selected cryptocurrency
// //   useEffect(() => {
// //     const fetchCryptoData = async () => {
// //       setLoading(true);
// //       try {
// //         const chartResult = await axios.get(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart`, {
// //           params: { vs_currency: 'usd', days: '1' },
// //         });

// //         const priceResult = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
// //           params: {
// //             vs_currency: 'usd',
// //             ids: selectedCrypto,
// //           },
// //         });

// //         if (chartResult.data && chartResult.data.prices) {
// //           const data = chartResult.data.prices;
// //           setChartData({
// //             labels: data.map((price) => new Date(price[0]).toLocaleDateString()),
// //             datasets: [
// //               {
// //                 label: `${selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price (USD)`,
// //                 data: data.map((price) => price[1]),
// //                 fill: false,
// //                 borderColor: 'rgba(75,192,192,1)',
// //                 tension: 0.1,
// //               },
// //             ],
// //           });
// //         }

// //         if (priceResult.data && priceResult.data.length > 0) {
// //           setCurrentPrice(priceResult.data[0].current_price);
// //         }

// //       } catch (error) {
// //         console.error('Error fetching crypto data:', error);
// //       }
// //       setLoading(false);
// //     };

// //     if (selectedCrypto) {
// //       fetchCryptoData();
// //     }
// //   }, [selectedCrypto]);

// //   return (
// //     <section className='h-cover  items-center justify-center bg-black ' >
// //           <div className='flex border-2 bg-dark-grey text-white mb-5 p-5 rounded-full items-center justify-center gap-10'>
// //             <p>Deposit</p>
// //             <p>Withdraw</p>
// //             <p>Buy</p>
// //             <p>Sell</p>
// //           </div>
// //           <div className=''>

// //       <div>
// //         {/* <label>Select Cryptocurrency: </label> */}
// //         <select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)} className='input-box'>
// //           {cryptos.length > 0 ? (
// //             cryptos.map((crypto) => (
// //               <option key={crypto.id} value={crypto.id}>
// //                 {crypto.name}
// //               </option>
// //             ))
// //           ) : (
// //             <option>Loading...</option>
// //           )}
// //         </select>
// //       </div>
// //       <div >
// //         {loading ? (
// //           <p>Loading data...</p>
// //         ) : (
// //           <>

// //             <h1 className='text-xl font-bold font-gelasio capitalize text-center mb-1 mt-3'>{selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price Chart</h1>
// //             {currentPrice !== null && (
// //               <p className='text-red font-semibold'>Current Price: ${currentPrice.toLocaleString()}</p>
// //             )}
// //             {chartData.labels ? (
// //               <Line data={chartData}  className='text-white'/>
// //             ) : (
// //               <p>No data available for this cryptocurrency.</p>
// //             )}
// //           </>
// //         )}
// //       </div>
// //           </div>
// //     </section>

// //   );
// // };

// // export default Dashboard;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { useContext } from 'react';
// import { UserContext } from '../App';
// import { Navigate } from 'react-router-dom';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const [cryptos, setCryptos] = useState([]);
//   const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
//   const [chartData, setChartData] = useState({});
//   const [currentPrice, setCurrentPrice] = useState(null);
//   const [loading, setLoading] = useState(false);
//   let {userAuth:{fullname, access_token}} = useContext(UserContext)

//   // Fetch the top 50 cryptocurrencies by market cap
//   useEffect(() => {
//     const fetchCryptos = async () => {
//       try {
//         const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//           params: {
//             vs_currency: 'usd',
//             order: 'market_cap_desc',
//             per_page: 50, // Limit to top 50
//             page: 1,
//           },
//         });
//         setCryptos(result.data);
//       } catch (error) {
//         console.error('Error fetching cryptos:', error);
//       }
//     };

//     fetchCryptos();
//   }, []);

//   // Fetch chart data and current price based on the selected cryptocurrency
//   useEffect(() => {
//     const fetchCryptoData = async () => {
//       setLoading(true);
//       try {
//         const chartResult = await axios.get(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart`, {
//           params: { vs_currency: 'usd', days: '1' },
//         });

//         const priceResult = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
//           params: {
//             vs_currency: 'usd',
//             ids: selectedCrypto,
//           },
//         });

//         if (chartResult.data && chartResult.data.prices) {
//           const data = chartResult.data.prices;
//           setChartData({
//             labels: data.map((price) => new Date(price[0]).toLocaleDateString()),
//             datasets: [
//               {
//                 label: `${selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price (USD)`,
//                 data: data.map((price) => price[1]),
//                 fill: false,
//                 borderColor: 'rgba(75,192,192,1)',
//                 tension: 0.1,
//               },
//             ],
//           });
//         }

//         if (priceResult.data && priceResult.data.length > 0) {
//           setCurrentPrice(priceResult.data[0].current_price);
//         }

//       } catch (error) {
//         console.error('Error fetching crypto data:', error);
//       }
//       setLoading(false);
//     };

//     if (selectedCrypto) {
//       fetchCryptoData();
//     }
//   }, [selectedCrypto]);

//   return (
//     access_token == null ? <Navigate to= "/signin"/>
//                 :
//     <section className='h-cover items-center justify-center bg-black'>
//         <p className='text-white capitalize font-bold float-right mt-5 mb-1 text-sm'>Welcome {fullname} +</p>
//       <div className='flex border-2 bg-dark-grey text-white mb-5 p-5 rounded-full items-center justify-center gap-5 text-xl  font-gelasio mt-20'>

//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold md:border md:rounded-full md:bg-black md:text-white md:py-1 md:px-2'>
//                          Deposit
//           </p>
//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold lg:border lg:rounded-full lg:bg-black lg:text-white lg:py-1 lg:px-2'>
//                         Withdraw
//           </p>
//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold lg:border lg:rounded-full lg:bg-black lg:text-white lg:py-1 lg:px-6'>
//                         Buy
//           </p>
//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold lg:border lg:rounded-full lg:bg-black lg:text-white lg:py-1 lg:px-6'>
//                         Sell
//           </p>

//       </div>
//       <div>
//         <div>
//           <select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)} className='input-box text-red'>
//             {cryptos.length > 0 ? (
//               cryptos.map((crypto) => (
//                 <option key={crypto.id} value={crypto.id}>
//                   {crypto.name}
//                 </option>
//               ))
//             ) : (
//               <option>Loading...</option>
//             )}
//           </select>
//         </div>
//         <div>
//           {loading ? (
//             <p>Loading data...</p>
//           ) : (
//             <>
//               <h1 className='text-xl font-bold font-gelasio capitalize text-center mb-1 mt-3 text-white'>
//                 {selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price Chart
//               </h1>
//               {currentPrice !== null && (
//                 <p className='text-red font-semibold'>Current Price: ${currentPrice.toLocaleString()}</p>
//               )}
//               {chartData.labels ? (
//                 <Line
//                   data={chartData}
//                   options={{
//                     scales: {
//                       x: {
//                         ticks: {
//                           color: 'white' // X-axis labels color
//                         }
//                       },
//                       y: {
//                         ticks: {
//                           color: 'white' // Y-axis labels color
//                         }
//                       }
//                     },
//                     plugins: {
//                       legend: {
//                         labels: {
//                           color: 'white' // Legend text color
//                         }
//                       },
//                       tooltip: {
//                         titleColor: 'white', // Tooltip title color
//                         bodyColor: 'white',  // Tooltip body color
//                         backgroundColor: 'rgba(0,0,0,0.7)', // Tooltip background color
//                       },
//                     },
//                   }}
//                 />
//               ) : (
//                 <p>No data available for this cryptocurrency.</p>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

// import { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { UserContext } from '../App';
// import { Navigate } from 'react-router-dom';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const [cryptos, setCryptos] = useState([]);
//   const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
//   const [chartData, setChartData] = useState({});
//   const [currentPrice, setCurrentPrice] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [news, setNews] = useState([]); // State for news
//   let {userAuth: {fullname, access_token}} = useContext(UserContext);

//   // Fetch the top 50 cryptocurrencies by market cap
//   useEffect(() => {
//     const fetchCryptos = async () => {
//       try {
//         const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//           params: {
//             vs_currency: 'usd',
//             order: 'market_cap_desc',
//             per_page: 50, // Limit to top 50
//             page: 1,
//           },
//         });
//         setCryptos(result.data);
//       } catch (error) {
//         console.error('Error fetching cryptos:', error);
//       }
//     };

//     fetchCryptos();
//   }, []);

//   // Fetch chart data and current price based on the selected cryptocurrency
//   useEffect(() => {
//     const fetchCryptoData = async () => {
//       setLoading(true);
//       try {
//         const chartResult = await axios.get(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart`, {
//           params: { vs_currency: 'usd', days: '1' },
//         });

//         const priceResult = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
//           params: {
//             vs_currency: 'usd',
//             ids: selectedCrypto,
//           },
//         });

//         if (chartResult.data && chartResult.data.prices) {
//           const data = chartResult.data.prices;
//           setChartData({
//             labels: data.map((price) => new Date(price[0]).toLocaleDateString()),
//             datasets: [
//               {
//                 label: `${selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price (USD)`,
//                 data: data.map((price) => price[1]),
//                 fill: false,
//                 borderColor: 'rgba(75,192,192,1)',
//                 tension: 0.1,
//               },
//             ],
//           });
//         }

//         if (priceResult.data && priceResult.data.length > 0) {
//           setCurrentPrice(priceResult.data[0].current_price);
//         }

//       } catch (error) {
//         console.error('Error fetching crypto data:', error);
//       }
//       setLoading(false);
//     };

//     if (selectedCrypto) {
//       fetchCryptoData();
//     }
//   }, [selectedCrypto]);

//   // Fetch crypto news
//   useEffect(() => {
//     const fetchCryptoNews = async () => {
//       try {
//         const result = await axios.get('https://cryptocontrol.io/api/v1/public/news', {
//           headers: {
//             'x-api-key': '0ad1613d-6d80-4b94-bd86-297047725441', // Replace with your CryptoControl API key
//           },
//           params: {
//             category: 'cryptocurrency',
//           },
//         });
//         setNews(result.data);
//       } catch (error) {
//         console.error('Error fetching crypto news:', error);
//       }
//     };

//     fetchCryptoNews();
//   }, []);

//   return (
//     access_token == null ? <Navigate to="/signin"/>
//                 :
//     <section className='h-cover items-center justify-center bg-black'>
//         <p className='text-white capitalize font-bold float-right mt-5 mb-1 text-sm'>Welcome {fullname} +</p>
//       <div className='flex border-2 bg-dark-grey text-white mb-5 p-5 rounded-full items-center justify-center gap-5 text-xl font-gelasio mt-20'>
//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold md:border md:rounded-full md:bg-black md:text-white md:py-1 md:px-2'>
//              Deposit
//           </p>
//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold lg:border lg:rounded-full lg:bg-black lg:text-white lg:py-1 lg:px-2'>
//             Withdraw
//           </p>
//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold lg:border lg:rounded-full lg:bg-black lg:text-white lg:py-1 lg:px-6'>
//             Buy
//           </p>
//           <p className='border-none bg-transparent text-white py-0 px-0 font-bold lg:border lg:rounded-full lg:bg-black lg:text-white lg:py-1 lg:px-6'>
//             Sell
//           </p>
//       </div>

//       <div>
//         <div>
//           <select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)} className='input-box text-red'>
//             {cryptos.length > 0 ? (
//               cryptos.map((crypto) => (
//                 <option key={crypto.id} value={crypto.id}>
//                   {crypto.name}
//                 </option>
//               ))
//             ) : (
//               <option>Loading...</option>
//             )}
//           </select>
//         </div>

//         <div>
//           {loading ? (
//             <p>Loading data...</p>
//           ) : (
//             <>
//               <h1 className='text-xl font-bold font-gelasio capitalize text-center mb-1 mt-3 text-white'>
//                 {selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price Chart
//               </h1>
//               {currentPrice !== null && (
//                 <p className='text-red font-semibold'>Current Price: ${currentPrice.toLocaleString()}</p>
//               )}
//               {chartData.labels ? (
//                 <Line
//                   data={chartData}
//                   options={{
//                     scales: {
//                       x: {
//                         ticks: {
//                           color: 'white' // X-axis labels color
//                         }
//                       },
//                       y: {
//                         ticks: {
//                           color: 'white' // Y-axis labels color
//                         }
//                       }
//                     },
//                     plugins: {
//                       legend: {
//                         labels: {
//                           color: 'white' // Legend text color
//                         }
//                       },
//                       tooltip: {
//                         titleColor: 'white', // Tooltip title color
//                         bodyColor: 'white',  // Tooltip body color
//                         backgroundColor: 'rgba(0,0,0,0.7)', // Tooltip background color
//                       },
//                     },
//                   }}
//                 />
//               ) : (
//                 <p>No data available for this cryptocurrency.</p>
//               )}
//             </>
//           )}
//         </div>

//         {/* Crypto News Section */}
//         <div className='mt-10 text-white'>
//           <h2 className='text-lg font-bold mb-4'>Latest Cryptocurrency News</h2>
//           {news.length > 0 ? (
//             <ul>
//               {news.map((article, index) => (
//                 <li key={index} className='mb-2'>
//                   <a href={article.url} target="_blank" rel="noopener noreferrer" className='text-blue-400 underline'>
//                     {article.title}
//                   </a>
//                   <p>{article.description}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No news available at the moment.</p>
//           )}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Dashboard;

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
