const doc = {
    empBody: document.querySelector("#empBody")
}



const state = {

     employeeList : []
}


function getEmployees(){
    const url ="http://localhost:8000/employees"
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
        state.employeeList=result
        // console.log(state.employeeList)
        renderTable()
    })
}


function renderTable(){
    state.employeeList.forEach(emp => {
        console.log(emp.name)
    })
    
}
getEmployees()

