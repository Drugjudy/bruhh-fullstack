import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");

    const [inpval, setINP] = useState({
        Name: "",
        email: "",
        EmpId: "",
        AccountNo: "",
        ActivationStatus: "",
        Division: "",
        Designation: "",
        DOJ: "",
        Zone: "",
        State: "",
        City: "",
        Location: "",
        CityZone: "",
        Head: "",
        Company: "",
        Salary: "",
        MDay: "",
        PaidDays: "",
        Basic: "",
        DA: "",
        HRA: "",
        CON: "",
        SpeicalAllowence: "",
        OtherAllowence: "",
        Gross: "",
        Empesic: "",
        Emppf: "",
        Emplwf: "",
        ProfessionalTax: "",
        ETD: "",
        AmountPaid: "",
        Admin1: "",
        MoblieAllowence: "",
        OtherExp: "",
        NetTakeHome: "",
        Incentive: "",
        Amount: "",
        DeductionInAdvance: "",
        NetAmountPaid: "",
        Remarks: "",
        IfscCode: "",
        BankName: "",
        AccountName: "",
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:5000/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {Name, email, ActivationStatus, Division, AccountNo, Designation, EmpId, DOJ, Zone, State, City, Location, CityZone, Head, Company, Salary, MDay, PaidDays, Basic, DA, HRA, CON, SpeicalAllowence, OtherAllowence, Gross, Empesic, Emppf, Emplwf, ProfessionalTax, ETD, AmountPaid, Admin1, MoblieAllowence, OtherExp, NetTakeHome, Incentive, Amount, DeductionInAdvance,  NetAmountPaid, Remarks, IfscCode, BankName, AccountName} = inpval;

        const res2 = await fetch(`http://localhost:5000/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Name, email, ActivationStatus, Division, AccountNo, Designation, EmpId, DOJ, Zone, State, City, Location, CityZone, Head, Company, Salary, MDay, PaidDays, Basic, DA, HRA, CON, SpeicalAllowence, OtherAllowence, Gross, Empesic, Emppf, Emplwf, ProfessionalTax, ETD, AmountPaid, Admin1, MoblieAllowence, OtherExp, NetTakeHome, Incentive, Amount, DeductionInAdvance,  NetAmountPaid, Remarks, IfscCode, BankName, AccountName
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history.push("/")
            setUPdata(data2);
        }

    }

    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
            <form className="mt-4">
                <div style={{border: '1px solid #ccc', padding: '10px', textAlign: 'center'}}>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.Name} onChange={setdata} name="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">date of joining</label>
                        <input type="text" value={inpval.DOJ} onChange={setdata} name="DOJ" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">AccountNo</label>
                        <input type="number" value={inpval.AccountNo} onChange={setdata} name="AccountNo" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">ActivationStatus</label>
                        <input type="text" value={inpval.ActivationStatus} onChange={setdata} name="ActivationStatus" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Division</label>
                        <input type="text" value={inpval.Division} onChange={setdata} name="Division" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Designation</label>
                         <input type="text" value={inpval.Designation} onChange={setdata} name="Designation" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Zone</label>
                        <input type="text" value={inpval.Zone} onChange={setdata} name="Zone" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">State</label>
                        <input type="text" value={inpval.State} onChange={setdata} name="State" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">city</label>
                        <input type="text" value={inpval.City} onChange={setdata} name="City" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Location</label>
                        <input type="text" value={inpval.Location} onChange={setdata} name="Location" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">CityZone</label>
                        <input type="text" value={inpval.CityZone} onChange={setdata} name="CityZone" class="form-control" id="exampleInputPassword1" />
                    </div> 
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Head</label>
                        <input type="text" value={inpval.Head} onChange={setdata} name="Head" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Company</label>
                        <input type="text" value={inpval.Company} onChange={setdata} name="Company" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Salary</label>
                        <input type="text" value={inpval.Salary} onChange={setdata} name="Salary" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">MDay</label>
                        <input type="text" value={inpval.MDay} onChange={setdata} name="MDay" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">PaidDays</label>
                        <input type="text" value={inpval.PaidDays} onChange={setdata} name="PaidDays" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Basic</label>
                        <input type="text" value={inpval.Basic} onChange={setdata} name="Basic" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">DA</label>
                        <input type="text" value={inpval.DA} onChange={setdata} name="DA" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">HRA</label>
                        <input type="text" value={inpval.HRA} onChange={setdata} name="HRA" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">CON</label>
                        <input type="text" value={inpval.CON} onChange={setdata} name="CON" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">SpeicalAllowence</label>
                        <input type="text" value={inpval.SpeicalAllowence} onChange={setdata} name="SpeicalAllowence" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">OtherAllowence</label>
                        <input type="text" value={inpval.OtherAllowence} onChange={setdata} name="OtherAllowence" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Gross</label>
                        <input type="text" value={inpval.Gross} onChange={setdata} name="Gross" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Empesic</label>
                        <input type="text" value={inpval.Empesic} onChange={setdata} name="Empesic" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Emppf</label>
                        <input type="text" value={inpval.Emppf} onChange={setdata} name="Emppf" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Emplwf</label>
                        <input type="text" value={inpval.Emplwf} onChange={setdata} name="Emplwf" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">ProfessionalTax</label>
                        <input type="text" value={inpval.ProfessionalTax} onChange={setdata} name="ProfessionalTax" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">ETD</label>
                        <input type="text" value={inpval.ETD} onChange={setdata} name="ETD" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">AmountPaid</label>
                        <input type="text" value={inpval.AmountPaid} onChange={setdata} name="AmountPaid" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Admin1</label>
                        <input type="text" value={inpval.Admin1} onChange={setdata} name="Admin1" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">MoblieAllowence</label>
                        <input type="text" value={inpval.MoblieAllowence} onChange={setdata} name="MoblieAllowence" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">OtherExp</label>
                        <input type="text" value={inpval.OtherExp} onChange={setdata} name="OtherExp" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">NetTakeHome</label>
                        <input type="text" value={inpval.NetTakeHome} onChange={setdata} name="NetTakeHome" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Amount</label>
                        <input type="text" value={inpval.Amount} onChange={setdata} name="Amount" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">DeductionInAdvance</label>
                        <input type="text" value={inpval.DeductionInAdvance} onChange={setdata} name="DeductionInAdvance" class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Incentive</label>
                        <input type="text" value={inpval.Incentive} onChange={setdata} name="Incentive" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">NetAmountPaid</label>
                        <input type="text" value={inpval.NetAmountPaid} onChange={setdata} name="NetAmountPaid" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Remarks</label>
                        <input type="text" value={inpval.Remarks} onChange={setdata} name="Remarks" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">IfscCode</label>
                        <input type="text" value={inpval.IfscCode} onChange={setdata} name="IfscCode" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">BankName</label>
                        <input type="text" value={inpval.BankName} onChange={setdata} name="BankName" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">AccountName</label>
                        <input type="text" value={inpval.AccountName} onChange={setdata} name="AccountName" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;





