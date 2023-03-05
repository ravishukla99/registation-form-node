const mongoose = require('mongoose')
   // mongoose compass
mongoose.connect("mongodb+srv://Raviform:Raviform@mongodblearn.yzso6tx.mongodb.net/?retryWrites=true&w=majority",{
	useNewUrlParser:true,
	useUnifiedTopology:true
	//  useCreateIndex:true
	
	//   mongoose campass
	// "mongodb://localhost:27017/myRegistration"
}).then(()=>{
	console.log(`connection successful`);

}).catch((e)=>{
	console.log(`no connecton`)
})
