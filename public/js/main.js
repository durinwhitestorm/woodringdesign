let ringSize 
let ringWidth 
let ringTitle 
let layerSelect 

const materialItem = document.querySelectorAll('.materialImage')
const removeLayer = document.querySelector('.removeLayer')

Array.from(materialItem).forEach((material)=>{
    material.addEventListener('click', setLayerImage)
})
document.querySelector(".ringSize").addEventListener('change', setRingSize)
document.querySelector(".ringWidth").addEventListener('change', setRingWidth)
document.querySelector(".ringTitle").addEventListener('change', setRingTitle)
document.querySelector("#layerSelection").addEventListener('change', setZLayer)

// document.querySelector('.removeLayer').addEventListener('click', setLayerImage)

function setZLayer(){

}

function setLayerImage(){
    const materialImage = this.src
    document.querySelector('.layerCore').style.backgroundImage = `url(${materialImage})`
}

//async function markComplete(){
    //     const todoId = this.parentNode.dataset.id
    //     try{
    //         const response = await fetch('todos/markComplete', {
    //             method: 'put',
    //             headers: {'Content-type': 'application/json'},
    //             body: JSON.stringify({
    //                 'todoIdFromJSFile': todoId
    //             })
    //         })
    //         const data = await response.json()
    //         console.log(data)
    //         location.reload()
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

function changeMaterialList(){

}

function setRingSize(size){

}

function setRingWidth(width){

}

function setRingTitle(name){
    //May not need if .onChange will work
    //May be able to tie in with Save button
}



// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }