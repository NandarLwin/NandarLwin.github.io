const students =[
    {id:644518, name: "Anna Johns", program:"Compro"},
    {id:644519, name: "Tom Jerry", program:"Compro"},
    {id:644520, name: "Kerry Jerry", program:"MBA"}
];

class Student{
    constructor(id,name,program){
        this.id = id;
        this.name = name;
        this.program = program;
    }
    create(){
        students.push(this);
        return students;
    }
    static getById(id){
        return students.find(s=>s.id===id);
    }
    static getAll(){
        return students;
    }
    static removebyId(id){
        let index = students.findIndex(s=> s.id===id);
        let deletedStudent;
        if(index>-1){
            deletedStudent = students[index];
           students.splice(index,1);
        }
        return deletedStudent;
    }
    static updateByStudentId(id, studentNewValues){
        let existingStudent = students.find(s=>s.id===id);
        if(Student.validateObject(studentNewValues)){
            if(existingStudent){
                let {id,name,program} = studentNewValues;
                if(name){
                    existingStudent.name = name;
                }
                if(program){
                    existingStudent.program = program;
                }
                return existingStudent;
            }
        }
        return null;
    }
    static filterByProgram(program){
        return students.filter(s=>s.program.toLowerCase() === program.toLowerCase());
    }
    static validateObject(object) {
        const studentKeys = Object.keys(new Student());
        const objKeys = Object.keys(object);
        for (let i = 0; i < objKeys.length; i++) {
            if (studentKeys[i] !== objKeys[i]) {
                return false;
            }
        }
        return true;
    }
}
module.exports = Student;