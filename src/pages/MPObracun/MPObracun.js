import React, { useState } from "react";
import getMPObracun from "../../service/getMPObracun";

const MPObracun = () => {
  const [obracun, setObracun] = useState([]);
  const [pjUid, setPjUid] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const formatDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };

  function handleSubmit() {
    const formattedFromDate = formatDate(fromDate);
    const formattedToDate = formatDate(toDate) || undefined;

    getMPObracun(pjUid, formattedFromDate, formattedToDate)
      .then((data) => {
        setObracun(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching obracun:", error);
      });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={pjUid}
          onChange={(e) => setPjUid(e.target.value)}
          placeholder="Enter Item ID"
        />
      </div>
      <div>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          placeholder="From Date"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          placeholder="To Date (Optional)"
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <table>
        {obracun.length !== 0
          ? obracun.result[0].obracun_artikli.map((obracun, index) => (
              <tr
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <td style={{ width: "100px" }}>{obracun.artikl_uid}</td>
                <td style={{ width: "100px" }}>{obracun.iznos}</td>
                <td style={{ width: "100px" }}>{obracun.kolicina}</td>
                <td style={{ width: "auto" }}>{obracun.naziv_artikla}</td>
                <td style={{ width: "100px" }}>{obracun.usluga}</td>
              </tr>
            ))
          : "Lista je prazna!"}
      </table>
    </div>
  );
};

export default MPObracun;
