window.onload =() =>{
    var emplID,empFirstName, empMiddleName,empLastName,empDoB,empDept,selectedValue;
    var data =[];
    document.getElementById("myForm").addEventListener('submit', event => {
        event.preventDefault();
        emplID= document.getElementById("patientIdNumber").value;
        empFirstName = document.getElementById("firstName").value;
        empMiddleName =document.getElementById("middleInitials").value;
        empLastName= document.getElementById("lastName").value;
        empDoB = document.getElementById("dateOfBirth").value;
        empDept =document.getElementById("ddlDepartment").value;
        selectedValue = document.querySelector('input[name="radioIsOutPatient"]:checked').value;
        data.push({empID:emplID, firstName: empFirstName, middleName: empMiddleName, lastName: empLastName, dob: empDoB, dept: empDept, out: selectedValue});
        addToTableBody(data); 
    });
    function addToTableBody(data){
        var tbody = document.getElementById("tbodyPatientsList");
        tbody.innerHTML = '';

        data.forEach(p => {
            var newRow = document.createElement("tr");
            // Create and populate cells
            var cell1 = document.createElement("td");
            cell1.textContent = p.empID;
            var cell2 = document.createElement("td");
            cell2.textContent = p.firstName;
            var cell3 = document.createElement("td");
            cell3.textContent = p.middleName;
            var cell4 = document.createElement("td");
            cell4.textContent = p.lastName;
            var cell5 = document.createElement("td");
            cell5.textContent = p.dob;
            var cell6 = document.createElement("td");
            cell6.textContent = p.dept;
            var cell7 = document.createElement("td");
            cell7.textContent = p.out;
    
            // Append cells to the row
            newRow.appendChild(cell1);
            newRow.appendChild(cell2);
            newRow.appendChild(cell3);
            newRow.appendChild(cell4);
            newRow.appendChild(cell5);
            newRow.appendChild(cell6);
            newRow.appendChild(cell7);
            // Append the row to the tbody
            tbody.appendChild(newRow);
        });


    }

    document.getElementById("chkElderlyPatients").addEventListener('click', function(e)  {
        var currentDate = new Date();
        var age=0;

        if(e.currentTarget.checked) {
            let eOnly = [];
            for(let i in data){
                age = currentDate.getFullYear() - new Date(data[i].dob).getFullYear();
                console.log(age);
                if(age>=65){
                    eOnly.push(data[i]);
                }
            }     
            addToTableBody(eOnly);
        }
        else {
            addToTableBody(data);
        }    
    });

    document.getElementById("chkShowOutPatients").addEventListener('click', function(e)  {
        if(e.currentTarget.checked) {
            let outOnly = [];
            for(let i of data){
                if(i.out === 'Yes'){
                    outOnly.push(i);
                }
            }     
            addToTableBody(outOnly);
        }
        else {
            addToTableBody(data);
        }    
    });
}   