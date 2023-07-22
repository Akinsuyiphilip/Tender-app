import React from "react";

const Table = () => {
  const DataFile = [
    {
      Merchant: "Ashluxe",
      Location: "United States",
      date: "6/19/14",
      Device: "Mac OS",
      Browser: "Chrome",
      IPAddress: "192.168.0.1",
      Time: "40 Minutes",
    },
    {
      Merchant: "Ashluxe",
      Location: "United States",
      date: "6/19/14",
      Device: "Mac OS",
      Browser: "Chrome",
      IPAddress: "192.168.0.1",
      Time: "40 Minutes",
    },
    {
      Merchant: "Ashluxe",
      Location: "United States",
      date: "6/19/14",
      Device: "Mac OS",
      Browser: "Chrome",
      IPAddress: "192.168.0.1",
      Time: "40 Minutes",
    },
    {
      Merchant: "Ashluxe",
      Location: "United States",
      date: "6/19/14",
      Device: "Mac OS",
      Browser: "Chrome",
      IPAddress: "192.168.0.1",
      Time: "40 Minutes",
    },
    {
      Merchant: "Ashluxe",
      Location: "United States",
      date: "6/19/14",
      Device: "Mac OS",
      Browser: "Chrome",
      IPAddress: "192.168.0.1",
      Time: "40 Minutes",
    },
    {
      Merchant: "Ashluxe",
      Location: "United States",
      date: "6/19/14",
      Device: "Mac OS",
      Browser: "Chrome",
      IPAddress: "192.168.0.1",
      Time: "40 Minutes",
    },
    {
      Merchant: "Ashluxe",
      Location: "United States",
      date: "6/19/14",
      Device: "Mac OS",
      Browser: "Chrome",
      IPAddress: "192.168.0.1",
      Time: "40 Minutes",
    },
  ];

  return (
    <table className="table-auto w-full text-left text-gray ">
      <thead className="bg-blurwhite rounded-lg">
        <tr className="border-b-2 border-borderlighgray border-solid ">
          <th className="px-4 py-2 ">Merchant</th>
          <th className="px-4 py-2 ">Location</th>
          <th className="px-4 py-2 ">date</th>
          <th className="px-4 py-2 ">Device </th>
          <th className="px-4 py-2 ">Browser</th>
          <th className="px-4 py-2 ">IP Address</th>
          <th className="px-4 py-2 ">Time</th>
        </tr>
      </thead>
      <tbody>
        {DataFile.map((d, i) => {
          return (
            <tr key={i}>
              <td className="border-b-2 border-borderlighgray border-l-2 border-solid px-4 py-2">
                {d.Merchant}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2 ">
                {d.Location}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2 ">
                {d.date}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
                {d.Device}
              </td>
              <td className="border-b-2 border-borderlighgray border-solid px-4 py-2">
                {d.Browser}{" "}
              </td>
              <td className="border-b-2 border-borderlighgray border-r-2 border-solid px-4 py-2">
                {d.IPAddress}
              </td>
              <td className="border-b-2 border-borderlighgray border-r-2 border-solid px-4 py-2">
                {d.Time}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
