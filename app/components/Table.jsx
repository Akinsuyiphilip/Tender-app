import React from "react";
import Image from "next/image";

const Table = () => {
  const DataFile = [
    {
      date: "6/19/14",
      Type: "Recieve",
      Chain: "Avalanche",
      WalletAddress: "0xfdc4846ccd6548facecd0b2b...",
      Amount: "$120,000",
      Status: "Completed",
    },
    {
      date: "6/19/14",
      Type: "Recieve",
      Chain: "Avalanche",
      WalletAddress: "0xfdc4846ccd6548facecd0b2b...",
      Amount: "$120,000",
      Status: "Completed",
    },
    {
      date: "6/19/14",
      Type: "Recieve",
      Chain: "Avalanche",
      WalletAddress: "0xfdc4846ccd6548facecd0b2b...",
      Amount: "$120,000",
      Status: "Completed",
    },
    {
      date: "6/19/14",
      Type: "Recieve",
      Chain: "Avalanche",
      WalletAddress: "0xfdc4846ccd6548facecd0b2b...",
      Amount: "$120,000",
      Status: "Completed",
    },
    {
      date: "6/19/14",
      Type: "Recieve",
      Chain: "Avalanche",
      WalletAddress: "0xfdc4846ccd6548facecd0b2b...",
      Amount: "$120,000",
      Status: "Completed",
    },
    {
      date: "6/19/14",
      Type: "Recieve",
      Chain: "Avalanche",
      WalletAddress: "0xfdc4846ccd6548facecd0b2b...",
      Amount: "$120,000",
      Status: "Completed",
    },
  ];

  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-blurwhite rounded-lg">
        <tr className="border  border-borderlighgray border-solid ">
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
              <td className="border border-r-0 border-borderlighgray  border-solid px-4 py-2">
                {d.date}
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2 ">
                <div className="flex items-center">
                  <Image
                    src="/RecieveIconbtn.svg"
                    alt="icon"
                    width={20}
                    height={50}
                    className="mr-2"
                  />
                  <span>{d.Type}</span>
                </div>
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2 ">
                <div className="flex items-center">
                  <Image
                    src="/Avanlanche.svg"
                    alt="icon"
                    width={30}
                    height={50}
                    className="mr-2"
                  />

                  {d.Chain}
                </div>
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2">
                {d.WalletAddress}
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2">
                {d.Amount}{" "}
              </td>
              <td className="border border-l-0 border-borderlighgray  border-solid px-4 py-2">
                <p className=" bg-successbg py-1 flex justify-center rounded-full text-success text-sm">
                  {d.Status}
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
