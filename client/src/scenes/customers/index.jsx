import React, { useState, useEffect, useContext } from 'react';
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { adddata, deldata, updatedata } from 'scenes/daily/context/ContextProvider';


const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  
   const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);

    const getdata = async () => {

        const res = await fetch("http://localhost:5000/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:5000/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    
};


  const columns= [

    {
    headerName: 'edit button',
    width: 100,
    renderCell: (cellValues) => {
      return ( 
        <NavLink to={`/edit/${cellValues.row._id}`}>
          <Button
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        </NavLink> 
      );
    },
  },
  {
    field: 'deleteButton',
    headerName: 'Delete',
    width: 100,
    renderCell: (cellValues) => {
      return (
        <Button  variant="contained"
            color="primary" onClick={() => {
    deleteuser(cellValues.row._id);
    window.location.reload();
  }}> delete </Button>
      );
    },
  },

       { field: 'Name', headerName: 'Name', width: 150} ,
      { field: 'email', headerName: 'Emp ID', width: 150 },
          { field: 'DOJ', headerName: 'Date of joining', width: 150 },
             { field: 'ActivationStatus', headerName: 'Active/deactive', width: 150 },
                { field: 'Division', headerName: 'Division', width: 150 },
                   { field: 'Designation', headerName: 'Designation', width: 150 },
                      { field: 'Zone', headerName: 'Zone', width: 150 },
                         { field: 'State', headerName: 'State', width: 150 },
                            { field: 'City', headerName: 'City', width: 150 },
                               { field: 'Location', headerName: 'Location', width: 150 },
                                  { field: 'CityZone', headerName: 'CityZone', width: 150 },
                                     { field: 'Head', headerName: 'Head', width: 150 },
                                        { field: 'Company', headerName: 'Company', width: 150 },
                                           { field: 'Salary', headerName: 'Salary', width: 150 },
                                              { field: 'MDay', headerName: 'MDay', width: 150 },
                                                 { field: 'PaidDays', headerName: 'PaidDays', width: 150 },
                                                    { field: 'Basic', headerName: 'Basic', width: 150 },
                                                       { field: 'DA', headerName: 'DA', width: 150 },
                                                          { field: 'HRA', headerName: 'HRA', width: 150 },
                                                             { field: 'CON', headerName: 'CON', width: 150 },
                                                                { field: 'SpeicalAllowence', headerName: 'SpeicalAllowence', width: 150 },
                                                                   { field: 'OtherAllowence', headerName: 'OtherAllowence', width: 150 },
                                                                      { field: 'Gross', headerName: 'Gross', width: 150 },
                                                                         { field: 'Empesic', headerName: 'Empesic', width: 150 },
                                                                            { field: 'Emppf', headerName: 'Emppf', width: 150 },
                                                                               { field: 'Emplwf', headerName: 'Emplwf', width: 150 },
                                                                                  { field: 'ProfessionalTax', headerName: 'ProfessionalTax', width: 150 },
                                                                                     { field: 'ETD', headerName: 'ETD', width: 150 },
      
      { field: 'AmountPaid', headerName: 'AmountPaid', width: 150 },
          { field: 'Admin1', headerName: 'Admin1', width: 150 },
             { field: 'PetrolAllowence', headerName: 'PetrolAllowence', width: 150 },
                { field: 'MoblieAllowence', headerName: 'MoblieAllowence', width: 150 },
                 { field: 'OtherExp', headerName: 'OtherExp', width: 150 },
          { field: 'NetTakeHome', headerName: 'NetTakeHome', width: 150 },
             { field: 'Incentive', headerName: 'Incentive', width: 150 },
                { field: 'Amount', headerName: 'Amount', width: 150 },
                 { field: 'DeductionInAdvance', headerName: 'DeductionInAdvance', width: 150 },
          { field: 'NetAmountPaid', headerName: 'NetAmountPaid', width: 150 },
             { field: 'Remarks', headerName: 'Remarks', width: 150 },
                { field: 'AccountNo', headerName: 'AccountNo', width: 150 }, { field: 'DeductionInAdvance', headerName: 'DeductionInAdvance', width: 150 },
          { field: 'IfscCode', headerName: 'IfscCode', width: 150 },
             { field: 'BankName', headerName: 'BankName', width: 150 },
                { field: 'AccountName', headerName: 'AccountName', width: 150 },
    // {
    //   field: "Name",
    //   headerName: "Name",
    //   flex: 0.25,
    // },
    // {
    //   field: "DOJ",
    //   headerName: "data of joining",
    //   flex: 0.25,
    // },
    // {
    //   field: "ActivationStatus",
    //   headerName: "Active/deactive",
    //   flex: 0.25,
    // },
    // {
    //   field: "Division",
    //   headerName: "Division",
    //   flex: 0.25,
    // },
    // {
    //   field: "Designation",
    //   headerName: "Designation",
    //   flex: 0.25,
    // },
    // {
    //   field: "Zone",
    //   headerName: "Zone",
    //   flex: 0.25,
    // },
    // {
    //   field: "State",
    //   headerName: "State",
    //   flex: 0.25,
    // },
    // {
    //   field: "City",
    //   headerName: "City",
    //   flex: 0.25,
    // },
    //  {
    //   field: "Location",
    //   headerName: "Location",
    //   flex: 0.25,
    // },
    // {
    //   field: "CityZone",
    //   headerName: "CityZone",
    //   flex: 0.25,
    // },
    // {
    //   field: "Head",
    //   headerName: "Head",
    //   flex: 0.25,
    // },
    // {
    //   field: "Company",
    //   headerName: "Company",
    //   flex: 0.1,
    // },
    // {
    //   field: "Salary",
    //   headerName: "Salary",
    //   flex: 0.1,
    // },
    // {
    //   field: "MDay",
    //   headerName: "MDay",
    //   flex: 0.1,
    // },
    // {
    //   field: "PaidDays",
    //   headerName: "PaidDays",
    //   flex: 0.1,
    // },
    // {
    //   field: "Basic",
    //   headerName: "Basic",
    //   flex: 0.1,},
    // },
    // {
    //   field: "DA",
    //   headerName: "ID",
    //   flex: 0.1,
    // },

    // {
    //   field: "DOJ",
    //   headerName: "data of join",
    //   flex: 0.1,
    // },
    // {
    //   field: "Location",
    //   headerName: "Country",
    //   flex: 0.4,
    // },
    // {
    //   field: "Company",
    //   headerName: "Company",
    //   flex: 1,
    // },
    // {
    //   field: "Head",
    //   headerName: "boss",
    //   flex: 0.25,
    // },
    //  {
    //   field: "Salary",
    //   headerName: "income",
    //   flex: 0.25,}
    
  
  ];


  return (
    <Box m="1.5rem 2.5rem">
      <Header title="MANAGERS" subtitle="List of Managers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {

            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backkkkgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
    
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          
        />
      </Box>
    </Box>
  );
};

export default Customers;


