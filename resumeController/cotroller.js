const ResumeModel = require("../resumeSchema/schema");

//resumecreate
const createResume = async (req, res) => {
  try {
    console.log(req.body);
    const { Name } = req.body;
    const create = new ResumeModel({
      Name,
    });
    await create.save();
    res.status(200).json({ message: "created successfully", data: create });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Not created", error: error });
  }
};

// find all resumes
const findAll = async (req, res) => {
  try {
    const allResumes = await ResumeModel.find();
    res.status(200).json({ message: "all user", data: allResumes });
  } catch (error) {
    res.status(500).json({ message: "cannot find all " });
  }
};

// find by id and delete
const deleteResume = (req, res) => {
  const deleteId = req.params.id;
  ResumeModel.findByIdAndDelete(deleteId)
    .then((result) => {
      res.status(200).json({ message: "Resume deleted", data: result });
    })
    .catch((error) => {
      res.status(500).json({ message: "not deleted", error: error });
    });
};


      // find by id and update
      const resumeUpdate=async (req,res)=>{
        const updateId = req.params.id;
        console.log(updateId);
        ResumeModel.findByIdAndUpdate(updateId, {
          Name: req.body.Name
          
        })
        .then((result)=>{
          res.status(200).json({message:" updated",data:result})
        
        })
        .catch((error)=>{
          res.status(500).json({message:" not updated",error:error})
         
        })
      
      }
      
module.exports = { createResume, findAll, deleteResume,resumeUpdate };
