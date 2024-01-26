exampleJsonFile = users
const button = document.getElementById("continueSignUp");
const nameField=document.getElementById("name");
const passField = document.getElementById("pass");
const infoField = document.getElementById("info");
const test = document.getElementById('testSelect')
var names=[]; var passs=[]
for(let i = 0; exampleJsonFile.users.length > i; i++){
    names.push(exampleJsonFile.users[i].name)
    passs.push(exampleJsonFile.users[i].pass)
}

function no(){
    infoField.innerText = "Не верный пароль или логин"
}



function enter(e){
    
    let currentTest=''
    console.log(exampleJsonFile.users.length)
    console.log(nameField.value, names.find((i) => i === nameField.value))

    if (names.find((i) => i === nameField.value)){
        if (test.value){
            console.log(test.value)
            window.parameter = test.value
            currentTest = test.value
        }
        if (passs.find((i) => i === passField.value)){
            window.location.href = `test.html?test=${currentTest}`
        }

        else{no()}
    }
    else {no()}
}



button.addEventListener("click", enter)
