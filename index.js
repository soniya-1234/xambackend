const express=require("express")
const app=express()
const db = require("./db");
const cors=require('cors')
const parser = require("body-parser")

const resumeRoute=require("./Route")

app.use(express.json())
app.use(cors())
app.use(parser.json())


app.use("/", resumeRoute);

const port = 7000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});