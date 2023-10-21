window.onload = display;
let studentData;
async function display() {
    let response = await fetch("http://localhost:3000/students");
    if (response.ok) {  
        studentData = await response.json();
        document.getElementById('tbodyStudentList').innerHTML = '';
        for (let e of studentData) {
            addRowToTable(e.id, e.name, e.program)
        }
        addStudentIds(studentData);
        document.getElementById('myform').reset();
    }
    else alert("Error" + response.status);

}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);

}
function addStudentIds(studentArr){
    let studentDropdown = document.getElementById("ddlStudent");
    studentDropdown.innerHTML = '';
    let updateStudentDropdown = document.getElementById("ddlStudentForUpdate");
    updateStudentDropdown.innerHTML ='' ;
    let option = document.createElement('option');
    option.value='';
    option.text = 'Select Student ID';

    studentDropdown.append(option);
    let updateOption = document.createElement('option');
    updateOption.value='';
    updateOption.text = 'Select Student ID';
    updateStudentDropdown.append(updateOption);
    for(let student of studentArr){
        option = document.createElement('option');
        option.value=student.id;
        option.text = student.id;
        studentDropdown.appendChild(option);
        updateOption = document.createElement('option');
        updateOption.value=student.id;
        updateOption.text = student.id;
        updateStudentDropdown.appendChild(updateOption);
    }
}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:3000/students", setting);
    if (response.ok) {
        //addRowToTable(id, name, program);
        display();
    } else alert("Error " + response.status);

}
async function deleteStudentById(id){
    let setting = {
        method: "DELETE"
    }
    let response = await fetch("http://localhost:3000/students/" + id, setting);
    if (response.ok) {
       display();
    } else alert("Error " + response.status);
}
document.getElementById('btnDelete').addEventListener("click", () => {
    let id = document.getElementById('ddlStudent').value;
    deleteStudentById(id);
});

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset();
});

function findStudenyById(id) {
    return studentData.find(s=> s.id === parseInt(id));
}
async function updateStudentById(id,name,program){
    let obj = { id, name, program };
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:3000/students/" + id, setting);
    if (response.ok) {
       display();
    } else alert("Error " + response.status);
}
document.getElementById('btnUpdate').addEventListener("click", () => {
    let id = document.getElementById('idForUpdate').value;
    let name = document.getElementById('nameForUpdate').value;
    let program = document.getElementById('programForUpdate').value;
    updateStudentById(id,name,program);
    
});

document.getElementById('ddlStudentForUpdate').addEventListener("change", () => {
    let id = document.getElementById('ddlStudentForUpdate').value;
    let existingStudent = findStudenyById(id);
    if(existingStudent){
        document.getElementById('idForUpdate').value = existingStudent.id;
        document.getElementById('nameForUpdate').value = existingStudent.name;
        document.getElementById('programForUpdate').value = existingStudent.program;
    }
    else alert("Error");

});