import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default function DetailsTable({ tableData }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="app details table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold}>Date</TableCell>
            <TableCell align="right" className={classes.bold}>
              Revenue
            </TableCell>
            <TableCell align="right" className={classes.bold}>
              Ad Requests
            </TableCell>
            <TableCell align="right" className={classes.bold}>
              Ad Responses
            </TableCell>
            <TableCell align="right" className={classes.bold}>
              Impressions
            </TableCell>
            <TableCell align="right" className={classes.bold}>
              Clicks
            </TableCell>
            <TableCell align="right" className={classes.bold}>
              Render Rate
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {new Date(
                  `${row.date.split("-")[2]}-${row.date.split("-")[1]}-${
                    row.date.split("-")[0]
                  }`
                ).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell align="right">{"$" + row.revenue}</TableCell>
              <TableCell align="right">{row.adRequest}</TableCell>
              <TableCell align="right">{row.adResponse}</TableCell>
              <TableCell align="right">{row.impressions}</TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">
                {parseFloat(
                  (row.impressions / row.adResponse) * 100
                ).toPrecision(3) + "%"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
