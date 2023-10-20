const Student = require("../model/student")
let controller ={
    getStudents: function(req,res,next){
        res.status(200).json(Student.getAll());
    },
    getStudentById: function(req,res,next){
        let id = parseInt(req.params.id);
        let student = Student.getById(id);
        if(student){
            res.status(200).json(student);
        }
        else{
            res.status(404).json({message:"Student not found"});
        }
    },
    createStudent: function(req,res,next){
        let {id,name,program} = req.body;
        if(id && name && program){
            let newStudent = new Student(id,name,program);
            newStudent.create();
            res.status(201).json(newStudent);
        }
        else{
            res.status(400).json({message:"provide all data."})
        }
    },
    deleteStudent: function(req,res,next){
        let id = parseInt(req.params.id);
        let deletedStudent = Student.removebyId(id);
        if(deletedStudent){
            res.status(200).json({message:"Removed the student"});
        }
        else{
            res.status(404).json(deletedStudent);
        }
    },
    updateStudent: function(req,res,next){
        let id = parseInt(req.params.id);
        let existingStudent = Student.updateByStudentId(id, req.body);
        if(existingStudent){
            res.status(200).json({message:"Updated successfully"});
        }
        else{
            res.status(400).json({message:"Wrong Info" });
        }

    },
    filterByProgram: function(req,res,next){
        let program = req.query.program;
        let studentsByFilteredProgram = Student.filterByProgram(program);
        if(studentsByFilteredProgram.length>0){
            res.status(200).json(studentsByFilteredProgram);
        }
        else{
            res.status(404).json({message:"No student with this program " + program});
        }
    },
}

module.exports = controller;