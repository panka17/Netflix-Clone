const express= require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute= require("./routes/auth");
const userRoute= require("./routes/users");
const movieRoute= require("./routes/movies");
const listRoute= require("./routes/lists");
dotenv.config();
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("connection successful"))
.catch((err)=>console.log(err));   

app.use(express.json());

app.use("/server/auth",authRoute);
app.use("/server/users",userRoute);
app.use("/server/movies",movieRoute);
app.use("/server/lists",listRoute);
app.listen(8800,()=>{
    console.log("Backend is running");
});