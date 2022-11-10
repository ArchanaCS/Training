import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
export default function Datepicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState("");
  // console.log(startDate)
  const dateentry = () => {
    let url = "http://localhost:8000/date";
    let request = { date: startDate };

    let header = {};
    console.log(request);
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(JSON.stringify(res.date));
      })
      .catch();
  };
  const dateretrieve = () => {
    let url = "http://localhost:8000/retrieve";
    let request = {};
    let header = {};
    axios
      .post(url, request.header)
      .then((res) => {
        var d = res.data[0].txtdate;
        console.log(d.substring(0, 10));
        setDate(d.substring(0, 10));
      })
      .catch();
  };
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <button onClick={dateentry}> Click me to enter into db</button>
      <br />
      <input type="text" value={date} />
      <button onClick={dateretrieve}> Click me to take from db</button>
      <br />
    </>
  );
}
