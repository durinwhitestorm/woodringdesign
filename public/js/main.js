let ringSize 
let ringWidth 
let ringTitle 
let currentLayer
let currentZValue

// function Ring(title,core,layer1,layer2,layer3,layer4,layer5,layer6,layer7,layer8){
//     this.title = title
//     this.core = core
//     this.layer1 = layer1
//     this.layer2 = layer2
//     this.layer3 = layer3
//     this.layer4 = layer4
//     this.layer5 = layer5
//     this.layer6 = layer6
//     this.layer7 = layer7
//     this.layer8 = layer8
//     // this.userId = userId
// }


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

document.querySelector('#save').addEventListener('click', saveRing)
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
    const inlayPosition = this.value
    document.querySelector(currentLayer).style.left = inlayPosition + 'px'

    switch(currentLayer){
        // case '.layer1': layerOne.xval = ringWidth * inlayPosition; break;          
        case '.layer2': layerTwo.xval = ringWidth * inlayPosition; break;
        case '.layer3': layerThree.xval = ringWidth * inlayPosition; break;
        case '.layer4': layerFour.xval = ringWidth * inlayPosition; break;
        case '.layer5': layerFive.xval = ringWidth * inlayPosition; break;
        case '.layer6': layerSix.xval = ringWidth * inlayPosition; break;
        case '.layer7': layerSeven.xval = ringWidth * inlayPosition; break;
        case '.layer8': layerEight.xval = ringWidth * inlayPosition; break;
        case '.layer9': layerNine.xval = ringWidth * inlayPosition; break;
    }
}

function setInlayWidth(){
    const inlayWidth = this.value
    console.log(inlayWidth)
    if(inlayWidth <= ringWidth){
        document.querySelector(currentLayer).style.width = (inlayWidth * 10) + 'px'

        switch(currentLayer){
            // case '.layer1': layerOne.width = inlayWidth; break;          
            case '.layer2': layerTwo.width = inlayWidth; break;
            case '.layer3': layerThree.width = inlayWidth; break;
            case '.layer4': layerFour.width = inlayWidth; break;
            case '.layer5': layerFive.width = inlayWidth; break;
            case '.layer6': layerSix.width = inlayWidth; break;
            case '.layer7': layerSeven.width = inlayWidth; break;
            case '.layer8': layerEight.width = inlayWidth; break;
            case '.layer9': layerNine.width = inlayWidth; break;
        }
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
    document.querySelector('.layer1').style.width = (ringWidth * 50) + 'px'
}

function setRingTitle(){
    ringTitle = this.value
}

function removeLayer(){
    document.querySelector(currentLayer).style.display = false
    document.querySelector(currentLayer).style.backgroundImage = ''
}

async function saveRing(){
    console.log(layerOne, layerTwo, layerThree, layerFour)
    // const ring = new Ring(ringTitle, layerOne, layerTwo, layerThree, layerFour, layerFive, layerSix, layerSeven,layerEight, layerNine)
    try{
        const response = await fetch('/save', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                
            })
        })
    }catch(err){
        console.log(err)
    }
}