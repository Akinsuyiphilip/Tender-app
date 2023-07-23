import React from "react";
import Image from "next/image";

const Table = () => {
  const DataFile = [
    {
      Name: "Ayokunle Damola",
      Email: "usman.yak@mail.com",
      PhoneNumber: "+234 8122344342",
      Location: "Minna",
      RegStatus: "pending",
    },
  ];

  return (
    <table className="table-auto w-full text-left text-gray">
      <thead className="bg-blurwhite rounded-lg text-sm font-thin">
        <tr className="border  border-borderlighgray border-solid ">
          <div className="flex justify-center items-center m-auto text-center p-4">
            <input type="checkbox" className=" " />
          </div>
          <th className="px-4 py-2 ">Name</th>
          <th className="px-4 py-2 ">Email</th>
          <th className="px-4 py-2 ">Phone Number</th>
          <th className="px-4 py-2 ">Location </th>
          <th className="px-4 py-2 ">Reg. Status </th>
        </tr>
      </thead>
      <tbody>
        {DataFile.map((d, i) => {
          return (
            <tr key={i}>
              <td className="border border-r-0 border-borderlighgray  border-solid px-4 py-2">
                <div className="flex justify-center items-center m-auto text-center p-4">
                  <input type="checkbox" className=" " />
                </div>
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2 ">
                <div className="flex items-center">
                  <Image
                    src="/AyoImage.svg"
                    alt="icon"
                    width={20}
                    height={50}
                    className="mr-2"
                  />
                  <span>{d.Name}</span>
                </div>
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2 ">
                {d.Email}
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2">
                {d.PhoneNumber}
              </td>
              <td className="border border-l-0 border-r-0 border-borderlighgray border-solid px-4 py-2">
                {d.Location}{" "}
              </td>
              <td className="border border-l-0 border-borderlighgray  border-solid px-4 py-2">
                <p className=" bg-yellowlightest py-1 px-2 flex justify-center rounded-full text-yellowdarkesst text-lg">
                  {d.RegStatus}
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
