import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./statepicker.module.css";
import { fetchdata } from "../../API";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const Statepicker = props => {
  const [fetchedstate, setfetchedstate] = useState([]);

  useEffect(() => {
    setfetchedstate(props.data);
  });

  function of_statechanged(selecteddata) {
    if (selecteddata) {
      props.changestate(
        selecteddata.state,
        { data: fetchedstate },
        selecteddata.statecode
      );
    }
  }

  return (
    <Autocomplete
      id="fetchedstate-highlight"
      style={{ width: 300 }}
      options={fetchedstate}
      getOptionLabel={option => option.state}
      onChange={(e, selecteddata) => of_statechanged(selecteddata)}
      renderInput={params => (
        <TextField
          {...params}
          label="Highlights"
          variant="outlined"
          margin="normal"
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.state, inputValue);
        const parts = parse(option.state, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );

  /*
  return (
    <FormControl className={styles.container}>
      <NativeSelect
        defaultValue=""
        onChange={e =>
          props.changestate(e.target.value, { data: fetchedstate })
        }
      >
        {fetchedstate.map((States, i) => (
          <option
            key={i}
            value={States.state}
            className={States.state == "Total" ? styles.option : ""}
          >
            {States.state}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
  */
};

export default Statepicker;
