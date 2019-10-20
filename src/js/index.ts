document.getElementById("InsertRow").addEventListener("click", AdditionToList);
let CaseSelect : HTMLSelectElement = <HTMLSelectElement>document.getElementById("CaseSelect");
let list = document.getElementById("list");
let elementInput : HTMLInputElement = <HTMLInputElement>document.getElementById('myInput');
function AdditionToList()
{
    let result = elementInput.value;
    let newLi = document.createElement("li");
    switch (CaseSelect.value) {
        case "UpperCase":
            newLi.innerHTML = result.toUpperCase();
            break;
        case "LowerCase":
            newLi.innerHTML = result.toLowerCase();
            break;
    }
    list.appendChild(newLi);
}