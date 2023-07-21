import React from "react";

const Table = () => {
  const DataFile = [
    {
      date: "6/19/14",
      Type: "Recieve",

      Chain: "Avalanche",

      WalletAddress: "0xfdc4846ccd6548facecd0b2b...",
      Amount: "$120,000",
      Status: "Completed",
      clas: "LeftBorder",
      class: "RightBorder",
    },
  ];

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
        {DataFile.map((d, i) => {
          return (
            <tr key={i}>
              <td className="border-b-2 border-borderlighgray border-l-2 border-solid px-4 py-2">
                {d.date}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2 ">
                <img src="/RecieveIconbtn.svg" alt="icon" />{d.Type}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2 ">
                <img src="/Avanlanche.svg" alt="imageicon" />
                {d.Chain}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
                {d.WalletAddress}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
                {d.Amount}{" "}
              </td>
              <td className="border-b-2 border-borderlighgray border-r-2 border-solid px-4 py-2">
                {d.Status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
