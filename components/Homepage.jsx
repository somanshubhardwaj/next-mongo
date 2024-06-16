"use client";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Homepage() {
  const [data, setData] = useState([]);
  const [col, setCol] = useState("");
  const fetchData = async () => {
    const response = await axios.get("/api/data");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addData = async (e) => {
    const response = await axios.post("/api/data", e);
    setData([...data, response.data]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addData({ col });
    setCol("");
  };

  return (
    <div className="px-6">
      <hr className="mt-6 mb-6" />
      <div className="flex  flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3  h-full">
          <div className="">
            <span className="font-bold text-2xl ">Add Data</span>
            <div className="mt-3">
              <form className="">
                <div className="mb-3">
                  <label className="block text-sm font-medium ">
                    col
                  </label>
                  <input
                    value={col}
                    onChange={(e) => setCol(e.target.value)}
                    type="text"
                    name="col"
                    id="col"
                    autoComplete="col"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px] text-black"
                  />
                </div>

                <div className="mb-3">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 md:px-4  h-full translist md:max-h-[70vh]">
          <span className="font-bold text-2xl">Data</span>
          <div className="mt-3">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    col
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((transaction) => (
                  <tr key={transaction._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm ">{transaction.col}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm ">{transaction.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
