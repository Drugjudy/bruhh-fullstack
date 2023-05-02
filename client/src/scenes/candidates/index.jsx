import React, { useState, useEffect, useContext } from 'react';
import { Box, useTheme } from "@mui/material";
import { useGetCandidatesQuery } from "state/api";
import Header from "components/Header";
import { DataGrid, } from "@mui/x-data-grid";
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { adddata, deldata, updatedata } from 'scenes/daily/context/ContextProvider';


const Candidates = () => {
  const theme = useTheme();
  const { data } = useGetCandidatesQuery();
  console.log("data", data);

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

    }


   


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
  {
    field: 'Name',
    headerName: 'Name',
    width: 100,
    disableClickEventBubbling: true,
  },
  {
    field: 'email',
    headerName: 'Emp ID',
    width: 100,
  },
  {
    field: 'DOJ',
    headerName: 'Date of joining',
    width: 100,
  },
  
             { field: 'ActivationStatus', headerName: 'Active/deactive', width: 100 },
                { field: 'Division', headerName: 'Division', width: 100 },
                   { field: 'Designation', headerName: 'Designation', width: 100 },
                      { field: 'Zone', headerName: 'Zone', width: 100 },
                         { field: 'State', headerName: 'State', width: 100 },
                            { field: 'City', headerName: 'City', width: 100 },
                               { field: 'Location', headerName: 'Location', width: 100 },
                                  { field: 'CityZone', headerName: 'CityZone', width: 100 },
                                     { field: 'Head', headerName: 'Head', width: 100 },
                                        { field: 'Company', headerName: 'Company', width: 100 },
                                           { field: 'Salary', headerName: 'Salary', width: 100 },
                                              { field: 'MDay', headerName: 'MDay', width: 100 },
                                                 { field: 'PaidDays', headerName: 'PaidDays', width: 100 },
                                                    { field: 'Basic', headerName: 'Basic', width: 100 },
                                                       { field: 'DA', headerName: 'DA', width: 100 },
                                                          { field: 'HRA', headerName: 'HRA', width: 100 },
                                                             { field: 'CON', headerName: 'CON', width: 100 },
                                                                { field: 'SpeicalAllowence', headerName: 'SpeicalAllowence', width: 100 },
                                                                   { field: 'OtherAllowence', headerName: 'OtherAllowence', width: 100 },
                                                                      { field: 'Gross', headerName: 'Gross', width: 100 },
                                                                         { field: 'Empesic', headerName: 'Empesic', width: 100 },
                                                                            { field: 'Emppf', headerName: 'Emppf', width: 100 },
                                                                               { field: 'Emplwf', headerName: 'Emplwf', width: 100 },
                                                                                  { field: 'ProfessionalTax', headerName: 'ProfessionalTax', width: 100 },
                                                                                     { field: 'ETD', headerName: 'ETD', width: 100 },
      
      { field: 'AmountPaid', headerName: 'AmountPaid', width: 100 },
          { field: 'Admin1', headerName: 'Admin1', width: 100 },
             { field: 'PetrolAllowence', headerName: 'PetrolAllowence', width: 100 },
                { field: 'MoblieAllowence', headerName: 'MoblieAllowence', width: 100 },
                 { field: 'OtherExp', headerName: 'OtherExp', width: 100 },
          { field: 'NetTakeHome', headerName: 'NetTakeHome', width: 100 },
             { field: 'Incentive', headerName: 'Incentive', width: 100 },
                { field: 'Amount', headerName: 'Amount', width: 100 },
                 { field: 'DeductionInAdvance', headerName: 'DeductionInAdvance', width: 100 },
          { field: 'NetAmountPaid', headerName: 'NetAmountPaid', width: 100 },
             { field: 'Remarks', headerName: 'Remarks', width: 100 },
                { field: 'AccountNo', headerName: 'AccountNo', width: 100 }, { field: 'DeductionInAdvance', headerName: 'DeductionInAdvance', width: 100 },
          { field: 'IfscCode', headerName: 'IfscCode', width: 100 },
             { field: 'BankName', headerName: 'BankName', width: 100 },
                { field: 'AccountName', headerName: 'AccountName', width: 100 },];
    // 


  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CANDIDATES" subtitle="List of Candidates" />
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

export default Candidates;


