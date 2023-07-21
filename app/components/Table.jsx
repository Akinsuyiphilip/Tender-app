import React from "react";

const Table = () => {
  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-blurwhite rounded-lg">
        <tr className="border-b-2 border-borderlighgray border-solid ">
          <th className="px-4 py-2 ">Date</th>
          <th className="px-4 py-2 ">Type</th>
          <th className="px-4 py-2 ">Chain</th>
          <th className="px-4 py-2 ">Wallet Address </th>
          <th className="px-4 py-2 ">Amount</th>
          <th className="px-4 py-2 ">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b-2 border-borderlighgray border-l-2 border-solid px-4 py-2">
            6/19/14
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            Recieve
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            Avalanche
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            0xfdc4846ccd6548facecd0b2b...
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            $120,000
          </td>
          <td className="border-b-2 border-borderlighgray border-r-2 border-solid px-4 py-2">
            Completed
          </td>
        </tr>
        <tr>
          <td className="border-b-2 border-borderlighgray border-l-2 border-solid px-4 py-2">
            6/19/14
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            Recieve
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            Avalanche
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            0xfdc4846ccd6548facecd0b2b...
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            $120,000
          </td>
          <td className="border-b-2 border-borderlighgray border-r-2 border-solid px-4 py-2">
            Completed
          </td>
        </tr>
        <tr>
          <td className="border-b-2 border-borderlighgray border-l-2 border-solid px-4 py-2">
            6/19/14
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            Recieve
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            Avalanche
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            0xfdc4846ccd6548facecd0b2b...
          </td>
          <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
            $120,000
          </td>
          <td className="border-b-2 border-borderlighgray border-r-2 border-solid px-4 py-2">
            Completed
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
