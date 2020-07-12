import axios from "axios";

const url = "https://api.covid19india.org/";

export const fetchdata = async () => {
  try {
    let specificUrl = `${url}/data.json`;

    const {
      data: { statewise }
    } = await axios.get(specificUrl);

    return statewise;
  } catch (error) {}
};

export const fetchStateData = async state => {
  try {
    console.log("Function for API fetchstatedata called.");
    let specificUrl = `${url}/v2/state_district_wise.json`;

    const { data } = await axios.get(specificUrl);
    console.log(data);
    let statedata = {};
    data.map(State => {
      if (State.state == state) {
        statedata = State.districtData;
        console.log(typeof statedata);
      }
    });
    return statedata;
  } catch (error) {}
};

export const fetchdistrictdailydata = async state => {
  try {
    let specifiedUrl = `${url}/v3/data-all.json`;
    let confirmed = [];
    let active = [];
    let deaths = [];
    let recovered = [];

    const { data } = await axios.get(specifiedUrl);

    const keys = Object.keys(data);

    keys.map((key, i) => {
      let dailydata = data[key];

      let statedailydata = dailydata[state];
      if (statedailydata) {
        confirmed[i] =
          typeof statedailydata.total.confirmed == "undefined"
            ? 0
            : statedailydata.total.confirmed;
        deaths[i] =
          typeof statedailydata.total.deceased == "undefined"
            ? 0
            : statedailydata.total.deceased;
        recovered[i] =
          typeof statedailydata.total.recovered == "undefined"
            ? 0
            : statedailydata.total.recovered;
      } else {
        confirmed[i] = 0;
        deaths[i] = 0;
        recovered[i] = 0;
      }
    });

    var returnData = {
      key: keys,
      confirmed:confirmed,
      deaths:deaths,
      recovered:recovered

    };
    
    return returnData;

  } catch (error) {}
};
