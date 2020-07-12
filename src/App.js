import React from "react";
import { fetchdata, fetchStateData, fetchdistrictdailydata } from "./App/API";
import { StatePicker, Cardinfo, TableData, Chart } from "./App/Components";
import styles from "./app.module.css";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  state = {
    data: [],
    fetcheddata: {},
    state: "",
    statecode: ""
  };

  async componentDidMount() {
    let data = {};
    const fetchData = await fetchdata();
    fetchData.map(State => {
      if (State.state == "Total") {
        data = {
          state: State.state,
          confirmed: parseInt(State.confirmed),
          active: State.active,
          deaths: State.deaths,
          recovered: State.recovered
        };
      }
    });

    this.setState({
      data: fetchData,
      fetcheddata: data,
      state: "",
      statecode: ""
    });
  }

  changestate = (state, apidata, statecode) => {
    console.log(state);
    console.log(apidata);
    let data = {};

    apidata.data.map(State => {
      if (State.state == state) {
        data = {
          state: State.state,
          confirmed: parseInt(State.confirmed),
          active: State.active,
          deaths: State.deaths,
          recovered: State.recovered
        };
      }
    });
    console.log(data);

    this.setState({
      data: apidata.data,
      fetcheddata: data,
      state: state,
      statecode: statecode
    });
  };

  HandleStateChanged = async state => {};

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item>
            <StatePicker
              setapidata={this.setapidata}
              changestate={this.changestate}
              data={this.state.data}
            ></StatePicker>
            <Cardinfo data={this.state.fetcheddata}></Cardinfo>
            <Chart
              state={this.state.state}
              statecode={this.state.statecode}
            ></Chart>
          </Grid>
          <Grid item>
            <TableData
              data={this.state.data}
              state={this.state.state}
            ></TableData>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
