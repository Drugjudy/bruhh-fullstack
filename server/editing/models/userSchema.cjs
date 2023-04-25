const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    EmpId: {
        type: String,
        required: true
    },
    AccountNo: {
        type: Number,
        required: true
    },
    ActivationStatus: {
        type: String,
        required: true
    },
    Division: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    DOJ: {
        type: String,
        required: true
    },
    Zone: { 
        type: String,
        required: true 
    },
     State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    CityZone: {
        type: String,
        required: true
    },
    Head: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    Salary: {
        type: String,
        required: true
    },
    MDay: {
        type: String,
        required: true
    },
    PaidDays: {
        type: String,
        required: true
    },
    Basic: {
        type: String,
        required: true
    },
    DA: {
        type: String,
        required: true
    },
    HRA: {
        type: String,
        required: true
    },
    CON: {
        type: String,
        required: true
    },
    SpeicalAllowence: {
        type: String,
        required: true
    },
    OtherAllowence: {
        type: String,
        required: true
    },
    Gross: {
        type: String,
        required: true
    },
    Empesic: {
        type: String,
        required: true
    },
    Emppf: {
        type: String,
        required: true
    },
    Emplwf: {
        type: String,
        required: true
    },
    ProfessionalTax: {
        type: String,
        required: true
    },
    ETD: {
        type: String,
        required: true
    },
    AmountPaid: {
        type: String,
        required: true
    },
    Admin1: {
        type: String,
        required: true
    },
    MoblieAllowence: {
        type: String,
        required: true
    },
    OtherExp: {
        type: String,
        required: true
    },
    NetTakeHome: {
        type: String,
        required: true
    },
    Incentive: {
        type: String,
        required: true
    },
    Amount: {
        type: String,
        required: true
    },
    DeductionInAdvance: {
        type: String,
        required: true
    },
    NetAmountPaid: {
        type: String,
        required: true
    },
     Remarks: {
        type: String,
        required: true
    },
     IfscCode: {
        type: String,
        required: true
    },
     BankName: {
        type: String,
        required: true
    },
     AccountName: {
        type: String,
        required: true
    },
  
   
    
   
} ,{ timestamps: true  }
);

const users = new mongoose.model("users",userSchema);


module.exports = users;