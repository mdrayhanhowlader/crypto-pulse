"use client";

import { useEffect, useState } from "react";

type Crypto = {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  image: string;
};

export default function Market() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await res.json();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    // Initial fetch
    fetchData();

    // Auto-refresh every 10 seconds
    intervalId = setInterval(fetchData, 10000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full py-12 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          🔥 Market Overview
        </h2>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">#</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Name</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Price</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">24h %</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Market Cap</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Volume</th>
                </tr>
              </thead>
              <tbody>
                {cryptos.map((crypto, index) => (
                  <tr key={crypto.id} className="border-t border-gray-300 dark:border-gray-700">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6 flex items-center gap-2">
                      <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
                      {crypto.name}
                    </td>
                    <td className="py-3 px-6">${crypto.current_price.toLocaleString()}</td>
                    <td
                      className={`py-3 px-6 ${
                        crypto.price_change_percentage_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="py-3 px-6">${crypto.market_cap.toLocaleString()}</td>
                    <td className="py-3 px-6">${crypto.total_volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
