import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./chat.css";
import { Chart } from "primereact/chart";
import { fetchdistrictdailydata } from "../../API";

const Statecharts = props => {
  const [fetcheddisdata, setfetcheddisdata] = useState({});

  console.log(props.state);
  console.log(props.statecode);
  useEffect(() => {
    const fetchStatedata1 = async () => {
      if (props.statecode) {
        let data = await fetchdistrictdailydata(props.statecode);
        console.log(data);
        setfetcheddisdata(data);
      }
    };

    fetchStatedata1();
  }, [props.state]);

  const linedisdata = {
    labels: fetcheddisdata.key,
    datasets: [
      {
        label: "Confirmed",
        data: fetcheddisdata.confirmed,
        fill: true,
        borderColor: "#0000FF"
      },
      {
        label: "Recovered",
        data: fetcheddisdata.recovered,
        fill: true,
        borderColor: "#007F00"
      },
      {
        label: "Deaths",
        data: fetcheddisdata.deaths,
        fill: true,
        borderColor: "#FFA726",
        backgroundColor: "#BF0000"
      }
    ]
  };

  return (
    <div>
      <h3>Line Styles</h3>
      <Chart type="line" data={linedisdata} />
    </div>
  );
};

export default Statecharts;
