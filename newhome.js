let employeePayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    employeePayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();  
    localStorage.removeItem('editEmp');
});

const createInnerHtml = () =>{
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (employeePayrollList.length == 0) return ;
    let innerHtml = `${headerHtml}`;
    for (const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
    
        <tr>
                <td>< img class="profile" src="${employeePayrollData._profilePic}" alt = ""></td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td>${getDeptHtml(employeePayrollData._department)}</td>
                <td>${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img name="${employeePayrollData._id}" onclick="remove(this)" alt = "delete" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAZlBMVEX///8REREAAACxsbEUFBT8/PylpaXExMT4+PiZmZlHR0dvb28MDAxDQ0MEBATj4+Px8fEiIiIdHR3p6ena2tpdXV0+Pj6EhIS6urrLy8urq6t5eXlUVFRpaWkvLy9PT083NzeRkZGV2aoMAAADX0lEQVR4nO2bi3aiMBCGkzFRpNPIXdSq+P4vuTOBArbdrXgC27M7vz3HJiHkYyZXEpUSiUQikUgkEolE88oqFX2Sj16aIz+eXj7odMwXJ7HFG3yht2JpkPwM2hitNWov/qIwnPOFQVbOFw/OObYEf3kkt1oYpAQyh7tcr3Gn6/VCbAbKecu1/Ddyf1QBGncukpGKszMIVTTOZYO3I3t/y6ghR2T1QMf/1Bk5q7kD8fnCk4xCF210WtyDFClFXuzvc4XAUDbJd4OKxqFON7s7bVKNrilGMXliQ7um2JbX+LVXTPVSY0WVtI+J4wopUo+vupbbIhwDP9L6Qm0UXS/gnoOqpuMPh/mDhrsTGK5CynRZq1AVlqx7yKj74sedJs4C2SGUe6y1e5jKMAj2NkyVjRSDGMTJBiGTUC4GUdH35TwAoqK9H1hwKgf64WcfqSAgnWueMYnPE8w1yrsG2sFtqjjXPhQHVZLba/y0Xm9hqohl13yeFE4RuyaAUfq7TLdwl8OGGXI6jsgPpdNEOaLRLQKA0Mi6fVJFd4NQOj7TZljHYAitVvBczwqh57ArmNyvsmYAwemDr5+zBAdxz1kk+PJi9eREYIY6IiAC8jhI+xbA+B7urk1TFL6nzw9CpRmeA7aFaj2auzEcdR3GDL3wjCC0+IY0Bd2XDojQM2lOcwYXAKHFyqnY3VLEtjS33e22rmVCTG+74jRaAs1ZR6DMaXbC82nPUfK0o3QtI01QI5WXo4vnBLnxjKv29idXrDm0Bl5skNdqDt0WAuHVrNqYdhHalsTJPmLDofWiIPorEC0gAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgPwjknNjE7l37UhdeOPmlTTZuT0nJeRkQna4jWzfdK3A0dZLU3Ttvg01to3WqlwAxGqGJs/5lPGJV4TuHhixuYLQROe/uBN1/2H9AQhnOuBiE7pLZQdCgf2Lsi9b9TgVHksVwkd0J3Rv+00ZwHz9szf4fW2kC8uNAnjgiGBzEHrK2tZgHafg6bj3ZISyISkrgbup9R/Fboe9sMiiTsBxWHSruuc3jFuEdYKgOwc88q0OZTT1flJWH0IeN+dxUstl+/I3Cn7XdJHysLyiIak/pTjuRp/7CbzpEIpFIJBKJRKJ/X78AowVDRrrdwpoAAAAASUVORK5CYII=" width="5%" height="5%">
                    <img name="${employeePayrollData._id}" alt="edit" onclick = "update(this)" src="https://as2.ftcdn.net/v2/jpg/03/38/46/23/1000_F_338462346_wZZhUA9S6daekMfyuF8cBssJgj4nao8M.jpg" width="5%" height="5%">
                </td>
        </tr>
        `;  
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')): [];
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name:  'Poojitha', _gender:'Female',_department:['Engineering','Finance'],_salary:'400000',_startDate : '29 oct 2019',_id:'',
            _id:new Date().getTime,_profilePic:'C:\Users\Poojitha\vs\emppayrollapp\blue.jpg'
        },
        {
            _name:  'Krishna', _gender:'male',_department:['Sales','HR'],_salary:'300000',_startDate : '29 oct 2019',_id:'',
            _id:new Date().getTime,_profilePic:'C:\Users\Poojitha\vs\emppayrollapp\bridge.jpg'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for(const dept of deptList){
        deptHtml= `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const remove = (node)=>{
    let empPayrollData = employeePayrollList.find(empPayrollData => empPayrollData._id == node._id );
    if(!empPayrollData) return;
    const index = employeePayrollList.map(empPayrollData => empPayrollData._id).indexof(empPayrollData._id);
    employeePayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
}