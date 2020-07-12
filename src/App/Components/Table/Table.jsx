import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchStateData } from "../../API";

const TableData = props => {
  const [fetchedstatedata, setfetchedstate] = useState([]);
  let rows = [];

  useEffect(() => {
    const fetchStatedata1 = async () => {
      if (props.state) {
        setfetchedstate(await fetchStateData(props.state));
      }
    };

    fetchStatedata1();
  }, [props.state]);

  /* useEffect(() => {
    console.log("table changed" + props.state);
    const fetchStatedata1 = async () => {
      let data = {};
      if (props.state) {
        data = await fetchStateData(props.state);
        console.log(data);
        setfetchedstate(data);
      }
    };

    fetchStatedata1();
  }, [setfetchedstate]); */
  console.log(fetchedstatedata);
  if (Array.isArray(fetchedstatedata)) {
    rows = fetchedstatedata;
  }

  //Need to work on this.
  /* const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'infected', numeric: true, disablePadding: false, label: 'Infected' },
    { id: 'active', numeric: true, disablePadding: false, label: 'Active' },
    { id: 'deaths', numeric: true, disablePadding: false, label: 'Deaths' },
    { id: 'recovered', numeric: true, disablePadding: false, label: 'Recovered' },
  ];

  function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  } */

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Infected</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {typeof rows != "undefined" ? (
            rows.map(row => (
              <TableRow key={row.district}>
                <TableCell component="th" scope="row">
                  {row.district}
                </TableCell>
                <TableCell align="right">{row.confirmed}</TableCell>
                <TableCell align="right">{row.active}</TableCell>
                <TableCell align="right">{row.deceased}</TableCell>
                <TableCell align="right">{row.recovered}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow key="blank"></TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
