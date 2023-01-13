`use strict`

const todo = document.querySelector(".todo")
const punto = document.querySelectorAll(".punto")

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener("click",()=>{
        let posicion = i
        let operacion = posicion * -25
        todo.style.transform = `translateX(${ operacion }%)`
        punto.forEach( ( cadaPunto , i)=>{
            punto[i].classList.remove("action")
        })
        punto[i].classList.add("activo")
    })
})