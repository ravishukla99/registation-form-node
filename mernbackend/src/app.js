const express = require('express');
const app = express();
const port = process.env.PORT || 3200;
require("./db/conn")
const path = require('path');
const hbs = require("hbs")
const Register = require("./models/registers")

const static_path = path.join(__dirname, "../public" )
const templates_path =path.join(__dirname, "../templates/views")
const partials_path =path.join(__dirname, "../templates/partials")

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

 app.use(express.static(static_path));
 app.set("view engine", "hbs")
 app.set("views", templates_path)
 hbs.registerPartials(partials_path)


 app.get('/',(req,res)=>{
    res.render("index")
 })
 app.post('/register',async (req,res)=>{
  	try{

const password = req.body.password;
const cpassword = req.body.confirmpassword;
if(password === cpassword){
	const registerEmployee = new Register({
		name:req.body.name,
		email:req.body.email,
		mobile:req.body.mobile,
		gender:req.body.gender,
		age:req.body.age,
		 password:password,
		confirmpassword:cpassword

	});
  const registered = await registerEmployee.save();
  res.status(201).render("index");

}else{
	res.send("password not match")
}
	}catch (error){
     res.status(400).send(error)
	}
})
// app.get("/register",(req,res)=>{
// 	res.render("register");
// })  
app.get('/login',(req,res)=>{
	res.render('login')
})
app.post("/login",async (req,res)=>{
	try{
		const email = req.body.email;
		const password = req.body.password;
		
		const useremail = await Register.findOne({email});
		res.send(useremail);
		console.log(useremail);

	}catch(error){
res.status(400).send("invalid email")
	}
})
app.listen(port,()=>{
	console.log(`server started`);
})