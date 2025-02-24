import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { useTable } from "react-table/dist/react-table.development";


const data = [
  {
    image: "https://via.placeholder.com/50", 
    site: "Oceanview Resort",
    camera: "Rear Gate",
    plate: "J330",
    vehicle: "Black, Dodge Truck",
    direction: "Entering",
    confidence: 91.37,
    time: "Thu, 19 Dec 2024, 04:19:56 pm",
    alert: "Unauthorized Number"
  },
  {
    image: "https://via.placeholder.com/50",
    site: "Parkway Mall",
    camera: "Main Entrance",
    plate: "P472",
    vehicle: "White, Honda SUV",
    direction: "Entering",
    confidence: 81.11,
    time: "Thu, 2 Jan 2025, 07:34:10 pm",
    alert: "No Number Plate"
  },
  {
    image: "https://via.placeholder.com/50",
    site: "Oceanview Resort",
    camera: "Main Entrance",
    plate: "A078",
    vehicle: "Blue, BMW Sedan",
    direction: "Exiting",
    confidence: 91.92,
    time: "Tue, 10 Dec 2024, 07:24:34 pm",
    alert: "Unauthorized Number"
  },
  {
    image: "https://via.placeholder.com/50", 
    site: "St. Louis Office",
    camera: "Main Entrance",
    plate: "S548",
    vehicle: "Blue, BMW Sedan",
    direction: "Exiting",
    confidence: 99.44,
    time: "Wed, 25 Dec 2024, 04:53:09 am",
    alert: "Unauthorized Number"
  },
  {
    image: "https://via.placeholder.com/50", 
    site: "Oceanview Resort",
    camera: "Rear Gate",
    plate: "L234",
    vehicle: "Green, Audi SUV",
    direction: "Entering",
    confidence: 87.66,
    time: "Tue, 24 Dec 2024, 05:04:53 pm",
    alert: "Stolen"
  },

  {
    image: "https://via.placeholder.com/50",
    site: "St.Louis Office",
    camera: "Rear Gate",
    plate: "S700",
    vehicle: "Black, Dodge Truck",
    direction: "Exiting",
    confidence: 84.63,
    time: "Tue, 17 Dec 2024, 01:44:51 am",
    alert: "Unauthorized Number"
  },

  {
    image: "https://via.placeholder.com/50", 
    site: "Oceanview Resort",
    camera: "Exit Lane",
    plate: "X893",
    vehicle: "White, Honda SUV",
    direction: "Entering",
    confidence: 92.38,
    time: "Mon, 16 Dec 2024, 09:56:31 pm",
    alert: "Unauthorized Number"
  },

  {
    image: "https://via.placeholder.com/50",
    site: "Central Station",
    camera: "Rear Gate",
    plate: "M604",
    vehicle: "White, Honda SUV",
    direction: "Exiting",
    confidence: 85.79,
    time: "Fri, 6 Dec 2024, 03:34:33 am",
    alert: "No Number Plate"
  },


  {
    image: "https://via.placeholder.com/50",
    site: "Parkway Mall",
    camera: "Service Entrance",
    plate: "V212",
    vehicle: "Silver, Ford sedan",
    direction: "Exiting",
    confidence: 85.54,
    time: "Wed, 1 Jan 2025, 09:10:45 am",
    alert: "Wrong Direction"
  },


  {
    image: "https://via.placeholder.com/50", 
    site: "Parkway Mall",
    camera: "Rear Gate",
    plate: "X728",
    vehicle: "Red, Toyota Pickup",
    direction: "Entering",
    confidence: 97.07,
    time: "Mon, 30 Dec 2024, 08:43:54 am",
    alert: "Speed"
  },

];


const columns = [
  { Header: "Image", accessor: "image", Cell: ({ value }) => <img src={value} alt="Vehicle" width="50" /> },
  { Header: "Site", accessor: "site" },
  { Header: "Camera", accessor: "camera" },
  { 
    Header: "Plate", 
    accessor: "plate",
    Cell: ({ value }) => <span style={{ color: "blue", fontWeight: "bold" }}>{value}</span> 
  },
  { Header: "Vehicle", accessor: "vehicle" },
  { Header: "Direction", accessor: "direction" },
  { Header: "Confidence", accessor: "confidence" },
  { Header: "Time", accessor: "time" },
  { Header: "Alert Type", accessor: "alert" }
];

const ANPRTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <Box sx={{ marginTop: 3 }}>
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, i) => (
              <TableRow key={i} {...headerGroup.getHeaderGroupProps()} sx={{ backgroundColor: "#f5f5f5" }}>
                {headerGroup.headers.map((column, j) => (
                  <TableCell 
                    key={j} 
                    {...column.getHeaderProps()} 
                    sx={{ fontWeight: "bold" }} 
                  >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, j) => (
                    <TableCell key={j} {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ANPRTable;