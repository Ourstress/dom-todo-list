const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

let todoList = document.querySelector("#todo-list")

tasks.forEach(function(element){
	let makeLi = document.createElement("li")
	todoList.appendChild(makeLi)
//	makeLi.setAttribute("id", tasks.indexOf(element))
	makeLi.textContent = element
})

todoList.addEventListener("click", function(e){
	e.target.classList.toggle("done")
})

let newTodo = document.querySelector("input")
let add = document.querySelector("button")

add.addEventListener("click", function(){
	let makeLi = document.createElement("li")
	todoList.appendChild(makeLi)
	makeLi.textContent = newTodo.value
	newTodo.value=""
})

newTodo.addEventListener("keypress", function(event){
	if(event.charCode === 13){
	event.preventDefault()
	let makeLi = document.createElement("li")
	todoList.appendChild(makeLi)
	makeLi.textContent = newTodo.value
	newTodo.value=""
}
})
//let listItems = document.querySelectorAll("li")
//console.log(listItems)

//listItems.forEach(function(element){
//	element.addEventListener("click",function(){
//	element.classList.add("done")
//})})
