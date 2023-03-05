const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
	firstname : {
		type:String,
		required:true
	},
	lastname: {
		type : String,
		required:true
	},
	email: {
		type:String,
		required:true,
		unique:true
	},
	gender:{
		type:String,
		required:true
	},
	phone: {
		type:Number,
		required:true,
		unique:true
	},
	age:{
		type:String,
		required:true
	},
	Password:{
		type:String,
		required:true
	},
	confirmpassword:{ 
		type:String,
		required:true 
	}
})

//  now we need to creat a collection

const Register = new mongoose.model("Register", employeeSchema) ;
module.exports= Register