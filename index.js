const resultado = document.getElementById("resultado")
const operation = document.getElementById("operation")
const total = document.getElementById("total")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const buttonpunto = document.getElementById("button.")
const buttonmeno = document.getElementById("button-")
const buttonmas = document.getElementById("button+")
const buttonpor = document.getElementById("buttonx")
const buttondividir = document.getElementById("button/")
const buttonigual = document.getElementById("button=")


let operationSelected = ''
let cantidad1 = ""
let numero1 = 0
let numero2 = 0


function showResult(msj){
    resultado.innerHTML = msj
}
function makeOperation(signo){
    operationSelected = signo
    numero1 = Number(cantidad1)
    cantidad1=''
    resultado.innerHTML = cantidad1

   

}
function makeResult(){
    numero2 = Number(cantidad1)
    cantidad1=''
    console.log(numero1)
    console.log(numero2)

 if (operationSelected == "+"){
    resultado.innerHTML = numero1 + numero2
 }
 if (operationSelected == "-"){
    resultado.innerHTML = numero1 - numero2
 }
 if (operationSelected == "x"){
    resultado.innerHTML = numero1 * numero2
 }
 if (operationSelected == "/"){
    resultado.innerHTML = numero1 / numero2
 }




}

button1.addEventListener("click",()=>{
    cantidad1 += "1"
   showResult(cantidad1)
}) 
button2.addEventListener("click",()=>{
    cantidad1 += "2"
   showResult(cantidad1)
})
button3.addEventListener("click",()=>{
    cantidad1 += "3"
   showResult(cantidad1)
})
button4.addEventListener("click",()=>{
    cantidad1 += "4"
   showResult(cantidad1)
})
button5.addEventListener("click",()=>{
    cantidad1 += "5"
   showResult(cantidad1)
})
button6.addEventListener("click",()=>{
    cantidad1 += "6"
   showResult(cantidad1)
})
button7.addEventListener("click",()=>{
    cantidad1 += "7"
   showResult(cantidad1)
})
button8.addEventListener("click",()=>{
    cantidad1 += "8"
   showResult(cantidad1)
})
button9.addEventListener("click",()=>{
    cantidad1 += "9"
   showResult(cantidad1)
})
buttonpunto.addEventListener("click",()=>{
    cantidad1 += "."
   showResult(cantidad1)
})
buttonmas.addEventListener("click",()=>{
    
   operation.innerHTML = "+"
    makeOperation("+")

})
buttonigual.addEventListener("click",()=>{
    makeResult()
})
buttonmeno.addEventListener("click",()=>{
    
    operation.innerHTML = "-"
     makeOperation("-")
})
buttonpor.addEventListener("click",()=>{
    
   operation.innerHTML = "x"
    makeOperation("x")
})
buttondividir.addEventListener("click",()=>{
    
   operation.innerHTML = "/"
    makeOperation("/")
})
button0.addEventListener("click",()=>{
    cantidad1 += "0"
   showResult(cantidad1)
})