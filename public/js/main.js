let ringSize 
let ringWidth 
let ringTitle 
let currentLayer
let currentZValue

function Layer(zval) {
    this.zval = zval
    // this.zval = zval
    // this.material = material
    // this.width = width
    // this.display = display
}

const layerOne = new Layer(1)
const layerTwo = new Layer(2)
const layerThree = new Layer(3)
const layerFour = new Layer(4)
const layerFive = new Layer(5)
const layerSix = new Layer(6)
const layerSeven = new Layer(7)
const layerEight = new Layer(8)
const layerNine = new Layer(9)


const materialItem = document.querySelectorAll('.materialImage')

Array.from(materialItem).forEach((material)=>{
    material.addEventListener('click', setLayerImage)
})
document.querySelector("#ringSizeSelect").addEventListener('change', setRingSize)
document.querySelector("#ringWidthInput").addEventListener('change', setRingWidth)
document.querySelector("#ringTitleInput").addEventListener('change', setRingTitle)
document.querySelector("#inlayWidth").addEventListener('change', setInlayWidth)
document.querySelector("#layerSelection").addEventListener('change', setZLayer)
document.querySelector("#removeLayer").addEventListener('click', removeLayer)

document.querySelector('#inlaySlider').addEventListener('change', inlaySlider)


function setZLayer(){
    currentZValue = this.value
    currentLayer = '.layer' + currentZValue
    document.querySelector(currentLayer).style.zIndex = currentZValue
    document.querySelector(currentLayer).style.display = true
    
}

function setLayerImage(){
    const materialImage = this.src
    const materialName = this.parentNode.id
    document.querySelector(currentLayer).style.backgroundImage = `url(${materialImage})`
    
    switch(currentLayer){
        case '.layer1': layerOne.display = true; layerOne.material = materialName; break;          
        case '.layer2': layerTwo.display = true; layerTwo.material = materialName; break;
        case '.layer3': layerThree.display = true; layerThree.material = materialName; break;
        case '.layer4': layerFour.display = true; layerFour.material = materialName; break;
        case '.layer5': layerFive.display = true; layerFive.material = materialName; break;
        case '.layer6': layerSix.display = true; layerSix.material = materialName; break;
        case '.layer7': layerSeven.display = true; layerSeven.material = materialName; break;
        case '.layer8': layerEight.display = true; layerEight.material = materialName; break;
        case '.layer9': layerNine.display = true; layerNine.material = materialName; break;
    }
}

function inlaySlider(){
    
}

function setInlayWidth(){
    const inlayWidth = this.value
    console.log(inlayWidth)
    if(inlayWidth <= ringWidth){
        document.querySelector(currentLayer).style.width = (inlayWidth * 10) + 'px'
    }else{
        alert('Please input a number smaller than the total width')
    }
}

// function changeMaterialList(){

// }

function setRingSize(){
    ringSize = this.value
}

function setRingWidth(){
    ringWidth = this.value
    console.log(ringWidth)
    document.querySelector('.layer1').style.width = (ringWidth * 10) + 'px'
}

function setRingTitle(){
    ringTitle = this.value
}

function removeLayer(){
    document.querySelector(currentLayer).style.display = false
    document.querySelector(currentLayer).style.backgroundImage = ''
}