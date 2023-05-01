const express = require("express");
const router = express.Router();
const users = require("../models/userSchema.cjs");



// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user

router.post("/register", async (req, res) => {
  const { Name, email, EmpId, AccountNo, ActivationStatus, Division, Designation, DOJ, Zone, State, City, Location, CityZone, Head, Company, Salary, MDay, PaidDays, Basic, DA, HRA, CON, SpeicalAllowence, OtherAllowence, Gross, Empesic, Emppf, Emplwf, ProfessionalTax, ETD, AmountPaid, Admin1, MoblieAllowence, OtherExp, NetTakeHome, Incentive, Amount, DeductionInAdvance, NetAmountPaid, Remarks, IfscCode, BankName, AccountName, Role  } = req.body;

  if (!Name || !email || !AccountNo || !ActivationStatus || !Division || !Designation || !DOJ || !Zone || !State || !City || !Location || !CityZone || !Head || !Company || !Salary || !MDay || !PaidDays || !Basic || !DA || !HRA || !CON || !SpeicalAllowence || !OtherAllowence || !Gross || !Empesic || !Emppf || !Emplwf || !ProfessionalTax || !ETD || !AmountPaid || !Admin1 || !MoblieAllowence || !OtherExp || !NetTakeHome || !Incentive || !Amount || !DeductionInAdvance || !NetAmountPaid || !Remarks || !IfscCode || !BankName || !AccountName || !Role) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
     const preuser = await users.findOne({email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }
    const adduser = new users({
      Name,
      email,
      AccountNo,
      ActivationStatus,
      Division,
      Designation,
      DOJ,
      Zone,
      State,
      City,
      Location,
      CityZone,
      Head,
      Company,
      Salary,
      MDay,
      PaidDays, Basic, DA, HRA, CON, SpeicalAllowence, OtherAllowence, Gross, Empesic, Emppf, Emplwf, ProfessionalTax, ETD, AmountPaid, Admin1, MoblieAllowence, OtherExp, NetTakeHome, Incentive, Amount, DeductionInAdvance, NetAmountPaid, Remarks, IfscCode, BankName, AccountName, Role
    });

    await adduser.save();

    res.status(201).json(adduser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// get userdata

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router;










