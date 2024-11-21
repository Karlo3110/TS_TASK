import React, { useState } from "react";
import getMPObracunPlacanja from "../../service/getMBObracunPlacanja";

const MPObracunPlacanja = () => {
  const [placanja, setPlacanja] = useState([]);
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

    getMPObracunPlacanja(pjUid, formattedFromDate, formattedToDate)
      .then((data) => {
        setPlacanja(data);
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
        {placanja.length !== 0
          ? placanja.result[0].obracun_placanja.map((placanja, index) => (
              <tr
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <td style={{ width: "100px" }}>{placanja.iznos}</td>
                <td style={{ width: "100px" }}>
                  {placanja.nadgrupa_placanja_naziv}
                </td>
                <td style={{ width: "100px" }}>
                  {placanja.nadgrupa_placanja_uid}
                </td>
                <td style={{ width: "auto" }}>{placanja.naziv}</td>
                <td style={{ width: "100px" }}>
                  {placanja.vrste_placanja_uid}
                </td>
              </tr>
            ))
          : "Lista je prazna!"}
      </table>
    </div>
  );
};

export default MPObracunPlacanja;
