const express=require("express")
const resumeRoute=express.Router()

const { createResume, findAll, deleteResume, resumeUpdate } = require("./resumeController/cotroller")

resumeRoute.post("/create",createResume)
resumeRoute.get("/findall",findAll)
resumeRoute.post("/delete",deleteResume)
resumeRoute.post("/update",resumeUpdate)



module.exports=resumeRoute