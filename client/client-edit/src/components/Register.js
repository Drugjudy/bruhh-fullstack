import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useHistory();

    const [inpval, setINP] = useState({
       Sno: "",
    EmpId: "",
    Name: "",
    DOJ: "",
    ActivationStatus: "",
    Division: "",
    Designation: "",
    Zone:"",
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
    DA:"",
    HRA: "",
    CON: "",
    SpeicalAllowence: "",
    OtherAllowence: "",
    Gross:"",
    Empesic: "",
    Emppf: "",
    Emplwf: "",
    ProfessionalTax: "",
    ETD:"",
    AmountPaid: "",
    Admin1: "",
    PetrolAllowence:"",
    MoblieAllowence:"",
    OtherExp: "",
    NetTakeHome: "",
    Incentive: "",
    Amount: "",
    DeductionInAdvance: "",
    NetAmountPaid: "",
    Remarks: "",
    AccountNo: "",
    IfscCode: "",
    BankName: "",
    AccountName:"",
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


    const addinpdata = async (e) => {
        e.preventDefault();

        const { Sno,
    EmpId,
    Name,
    DOJ,
    ActivationStatus,
    Division,
    Designation,
    Zone,
    State,
    City,
    Location,
    CityZone,
    Head,
    Company,
    Salary,
    MDay,
    PaidDays,
    Basic,
    DA,
    HRA,
    CON,
    SpeicalAllowence,
    OtherAllowence,
    Gross,
    Empesic,
    Emppf,
    Emplwf,
    ProfessionalTax,
    ETD,
    AmountPaid,
    Admin1,
    PetrolAllowence,
    MoblieAllowence,
    OtherExp,
    NetTakeHome,
    Incentive,
    Amount,
    DeductionInAdvance,
    NetAmountPaid,
    Remarks,
    AccountNo,
    IfscCode,
    BankName,
    AccountName } = inpval;

        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Sno,
    EmpId,
    Name,
    DOJ,
    ActivationStatus,
    Division,
    Designation,
    Zone,
    State,
    City,
    Location,
    CityZone,
    Head,
    Company,
    Salary,
    MDay,
    PaidDays,
    Basic,
    DA,
    HRA,
    CON,
    SpeicalAllowence,
    OtherAllowence,
    Gross,
    Empesic,
    Emppf,
    Emplwf,
    ProfessionalTax,
    ETD,
    AmountPaid,
    Admin1,
    PetrolAllowence,
    MoblieAllowence,
    OtherExp,
    NetTakeHome,
    Incentive,
    Amount,
    DeductionInAdvance,
    NetAmountPaid,
    Remarks,
    AccountNo,
    IfscCode,
    BankName,
    AccountName
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            history.push("/")
            setUdata(data)
            console.log("data added");

        }
    }

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Employ ID</label>
                        <input type="text" value={inpval.EmpId} onChange={setdata} name="EmpId" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.Name} onChange={setdata} name="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Date of joining</label>
                        <input type="text" value={inpval.DOJ} onChange={setdata} name="DOJ" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">ActivationStatus</label>
                        <input type="text" value={inpval.ActivationStatus} onChange={setdata} name="ActivationStatus" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Division</label>
                        <input type="text" value={inpval.Division} onChange={setdata} name="Division" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Designation</label>
                        <input type="text" value={inpval.Designation} onChange={setdata} name="Designation" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Zone</label>
                        <input type="text" value={inpval.Zone} onChange={setdata} name="Zone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">State</label>
                        <input type="text" value={inpval.State} onChange={setdata} name="State" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">City</label>
                        <input type="text" value={inpval.City} onChange={setdata} name="City" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Location</label>
                        <input type="text" value={inpval.Location} onChange={setdata} name="Location" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                        <label for="exampleInputPassword1" class="form-label">PetrolAllowence</label>
                        <input type="text" value={inpval.PetrolAllowence} onChange={setdata} name="PetrolAllowence" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">MoblieAllowence</label>
                        <input type="text" value={inpval.MoblieAllowence} onChange={setdata} name="MoblieAllowence" class="form-control" id="exampleInputPassword1" />
                    </div>
                     <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">NetTakeHome</label>
                        <input type="text" value={inpval.NetTakeHome} onChange={setdata} name="NetTakeHome" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Incentive</label>
                        <input type="text" value={inpval.Incentive} onChange={setdata} name="Incentive" class="form-control" id="exampleInputPassword1" />
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
                        <label for="exampleInputPassword1" class="form-label">NetAmountPaid</label>
                        <input type="text" value={inpval.NetAmountPaid} onChange={setdata} name="NetAmountPaid" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Remarks</label>
                        <input type="text" value={inpval.Remarks} onChange={setdata} name="Remarks" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">AccountNo</label>
                        <input type="text" value={inpval.AccountNo} onChange={setdata} name="AccountNo" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">IfscCode</label>
                        <input type="text" value={inpval.IfscCode} onChange={setdata} name="IfscCode" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">BankName</label>
                        <textarea name="text" value={inpval.BankName} onChange={setdata} name = "BankName" className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">AccountName</label>
                        <input type="text" value={inpval.AccountName} onChange={setdata} name="AccountName" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;
