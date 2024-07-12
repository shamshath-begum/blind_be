const mongoose=require('mongoose')
const validator=require('validator')
const UserSchema=new mongoose.Schema({

    name: String,
  email: String,
  dob: Date,
  date: Date,
  employeeType: String,
  jobType: String,
  contactNumber: String,
  gender: String,
  maritalStatus: String,
  city: String,
  pincode: String,
  photo: String,
  nationality: String,
  currentOrganisation: String,
  currentDesignation: String,
  smoke: String,
  alcohol: String,
  marketingInterest: String,
  university: String,
  course: String,
  percentage: String,
  hobbies: String,
  careerPlan: String,
  companyChoice: String,
  positionApplied: String,
  experience: String,
  expectedSalary: String,
//     name:{type:String,required:true},
//     date:{type:Date,required:true},
//     typeA:{type:String,required:true},
//     typeB:{type:String,required:true},
//     contactNumber:{type:Number,required:true},
// dob:{type:Date,required:true},
//     gender:{type:String,required:true},
//     email:{type:String,required:true ,
//     validate:(value)=>validator.isEmail(value)
//     },
//     maritialStatus:{type:String,required:true},
//     city:{type:String,required:true},
//     pinCode:{type:Number,default:"salesRep"},
//     nationality:{type:String,required:true},
//     organisation:{type:String,required:true},
//     designation:{type:String,required:true},
//     smoke:{type:String,required:true},
//     alcohol:{type:String,required:true},
//     marketing:{type:String,required:true},
// position:{type:String,required:true},
// experience:{type:String,required:true},
//     salary:{type:Number,required:true},
//     university:{type:String,required:true},
//     course:{type:String,required:true},
//     percentage:{type:String,required:true},
//     carrier:{type:String,required:true},
//     company:{type:String,required:true},
//     createdAt:{type:Date,default:Date.now()}
// },{versionKey:false})
})

const UserModel=mongoose.model('user',UserSchema)
module.exports={UserModel}

         
         