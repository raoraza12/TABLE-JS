var inn = document.querySelector("#inn")
var out = document.querySelector("#out")


function make() {


out.innerHTML = ``


number = inn.value

for (var i = 1 ; i<=10; i++  ){
out.innerHTML = out.innerHTML + `${number} X ${i} = ${number*i} <br> `

}



}