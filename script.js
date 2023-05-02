

let row1 = [
    {
        'keyEn':'q',
        'keyRu':'й'
    },
    {
        'keyEn':'w',
        'keyRu':'ц'
    },
    {
        'keyEn':'e',
        'keyRu':'у'
    },
    {
        'keyEn':'r',
        'keyRu':'к'
    },
    {
        'keyEn':'t',
        'keyRu':'е'
    },
    {
        'keyEn':'y',
        'keyRu':'н'
    },
    {
        'keyEn':'u',
        'keyRu':'г'
    },
    {
        'keyEn':'i',
        'keyRu':'ш'
    },
    {
        'keyEn':'o',
        'keyRu':'щ'
    },
    {
        'keyEn':'p',
        'keyRu':'з'
    },
    {
        'keyEn':'[',
        'keyRu':'х'
    },
    {
        'keyEn':']',
        'keyRu':'ъ'
    },
]
let row2 = [
    {
        'keyEn':'a',
        'keyRu':'ф'
    },
    {
        'keyEn':'s',
        'keyRu':'ы'

    },
    {
        'keyEn':'d',
        'keyRu':'в'
    },
    {
        'keyEn':'f',
        'keyRu':'а'
    },
    {
        'keyEn':'g',
        'keyRu':'п'
    },
    {
        'keyEn':'h',
        'keyRu':'р'
    },
    {
        'keyEn':'j',
        'keyRu':'о'
    },
    {
        'keyEn':'k',
        'keyRu':'л'
    },
    {
        'keyEn':'l',
        'keyRu':'д'
    },
    {
        'keyEn':';',
        'keyRu':'ж'
    },
    {
        'keyEn':'\'',
        'keyRu':'э'
    },
    {
        'keyEn':'\\',
        'keyRu':'\\'
    },
]
let row3 = [
    {
        'keyEn':'z',
        'keyRu':'я'
    },
    {
        'keyEn':'x',
        'keyRu':'ч'
    },
    {
        'keyEn':'c',
        'keyRu':'с'
    },
    {
        'keyEn':'v',
        'keyRu':'м'
    },
    {
        'keyEn':'b',
        'keyRu':'и'
    },
    {
        'keyEn':'n',
        'keyRu':'т'
    },
    {
        'keyEn':'m',
        'keyRu':'ь'
    },
    {
        'keyEn':',',
        'keyRu':'б'
    },
    {
        'keyEn':'.',
        'keyRu':'ю'
    },
    {
        'keyEn':'/',
        'keyRu':'.'
    },
]
let rowNumber = [
    {
        key:'1'
    },
    {
        key:'2'
    },
    {
        key:'3'
    },
    {
        key:'4'
    },
    {
        key:'5'
    },
    {
        key:'6'
    },
    {
        key:'7'
    },
    {
        key:'8'
    },
    {
        key:'9'
    },
    {
        key:'0'
    },
    {
        key:'-'
    },
    {
        key:'='
    },
]



let body = document.querySelector('body')

// function getKey(event){
// console.log(event.keyCode);
// }
// window.localStorage.clear()
document.addEventListener('keydown', function(event) {
    if(event.altKey && event.shiftKey && memory === 'En'){
        memory = 'Ru'
        console.log(memory);
        window.localStorage.setItem('name-key', `${memory}`)        
        let row1 = [...wrapperRow1.children]
        console.log(wrapperRow1.children);
        for(let i = 0;i < row1.length;i++){
            wrapperRow1.firstChild.remove()
        }
        let row2 = [...wrapperRow2.children]
        for(let i = 0;i < row2.length;i++){
            wrapperRow2.firstChild.remove()
        }
        let row3 = [...wrapperRow3.children]
        for(let i = 0;i < row3.length;i++){
            wrapperRow3.firstChild.remove()
        }
        let row4 = [...wrapperRow4.children]
        for(let i = 0;i < row4.length;i++){
            wrapperRow4.firstChild.remove()
        }
        let rowNumber = [...wrapperNumber.children]
        for(let i = 0;i < rowNumber.length;i++){
            wrapperNumber.firstChild.remove()
        }
        row1Hard = []
        console.log(row1Hard);
        row2Hard = []
        row3Hard = []
        row4Hard = []
        wrapperNumberHard = []
    addButtons()
      
      }else{
        if(event.altKey && event.shiftKey && memory === 'Ru'){
            memory = 'En'
            window.localStorage.setItem('name-key', `${memory}`)
            let row1 = [...wrapperRow1.children]
            console.log(wrapperRow1.children);
            for(let i = 0;i < row1.length;i++){
                wrapperRow1.firstChild.remove()
            }
            let row2 = [...wrapperRow2.children]
            for(let i = 0;i < row2.length;i++){
                wrapperRow2.firstChild.remove()
            }
            let row3 = [...wrapperRow3.children]
            for(let i = 0;i < row3.length;i++){
                wrapperRow3.firstChild.remove()
            }
            let row4 = [...wrapperRow4.children]
            for(let i = 0;i < row4.length;i++){
                wrapperRow4.firstChild.remove()
            }
            let rowNumber = [...wrapperNumber.children]
            for(let i = 0;i < rowNumber.length;i++){
                wrapperNumber.firstChild.remove()
            }
            row1Hard = []
            console.log(row1Hard);
            row2Hard = []
            row3Hard = []
            row4Hard = []
            wrapperNumberHard = []
        addButtons()
            
          }
      }
      console.log(memory);
   
    let bigrow = [...row1Hard,...row2Hard,...row3Hard,...row4Hard,...row5Hard,...wrapperNumberHard]

    // console.log(bigrow);
    let result = bigrow.find(elem => elem.innerHTML === event.key || elem.innerHTML === event.code || elem.innerHTML === 'Ctrl' && event.key ==='Control' || elem.innerHTML === '🠕' && event.key === 'ArrowUp'
    || elem.innerHTML === '🠔' && event.key === 'ArrowLeft'
    || elem.innerHTML === '🠖' && event.key === 'ArrowRight'
    || elem.innerHTML === '🠗' && event.key === 'ArrowDown'
    || elem.innerHTML === '\'' && event.key === 'Dead'
    )
    // console.log(bigrow[23].innerHTML);
    console.log(event);
    // console.log(bigrow);
    result.classList.add('active')
    
  });
  document.addEventListener('keyup', function(event) {
      
      let bigrow = [...row1Hard,...row2Hard,...row3Hard,...row4Hard,...row5Hard,...wrapperNumberHard]
    //   console.log(bigrow);
    let result = bigrow.find(elem => elem.innerHTML === event.key || elem.innerHTML === event.code || elem.innerHTML === 'Ctrl' && event.key ==='Control' || elem.innerHTML === '🠕' && event.key === 'ArrowUp'
    || elem.innerHTML === '🠔' && event.key === 'ArrowLeft'
    || elem.innerHTML === '🠖' && event.key === 'ArrowRight'
    || elem.innerHTML === '🠗' && event.key === 'ArrowDown'
    || elem.innerHTML === '\'' && event.key === 'Dead'
    )
    result.classList.remove('active')
//    console.log(result);
  });
document.addEventListener('mousedown',(event)=>{
    console.log(event);
    if(event.target === "BODY"){
console.log(1);
    }
    let bigrow = [...row1Hard,...row2Hard,...row3Hard,...row4Hard,...row5Hard,...wrapperNumberHard]
    let result = bigrow.find(elem => elem.innerHTML === event.target.innerHTML || elem.innerHTML === event.code || elem.innerHTML === 'Ctrl' && event.target.innerHTML ==='Control' || elem.innerHTML === '🠕' && event.target.innerHTML === 'ArrowUp'
    || elem.innerHTML === '🠔' && event.target.innerHTML === 'ArrowLeft'
    || elem.innerHTML === '🠖' && event.target.innerHTML === 'ArrowRight'
    || elem.innerHTML === '🠗' && event.target.innerHTML === 'ArrowDown'
    )
    // console.log(body.children);
    // console.log(bigrow);
    result.classList.add('active')
    // console.log(event.keyCode);
})
document.addEventListener('mouseup',(event)=>{
    let bigrow = [...row1Hard,...row2Hard,...row3Hard,...row4Hard,...row5Hard,...wrapperNumberHard]
    // console.log(event.target);
  let result = bigrow.find(elem => elem.innerHTML === event.target.innerHTML || elem.innerHTML === event.target.code || elem.innerHTML === 'Ctrl' && event.innerHTML ==='Control' || elem.innerHTML === '🠕' && event.target.innerHTML === 'ArrowUp'
  || elem.innerHTML === '🠔' && event.target.innerHTML === 'ArrowLeft'
  || elem.innerHTML === '🠖' && event.target.innerHTML === 'ArrowRight'
  || elem.innerHTML === '🠗' && event.target.innerHTML === 'ArrowDown'
  )
  result.classList.remove('active')
})

function mause(event){
wrapperInput.innerHTML += event.target.innerHTML
// wrapperInput.focus()
// wrapperInput.selectionStart = wrapperInput.value.length;
}

let row1Hard = []
let row2Hard = []
let row3Hard = []
let row4Hard = []
let row5Hard = []
let wrapperNumberHard = []

let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
let wrapperInput = document.createElement('textArea')
wrapperInput.classList.add('wrapperInput')
wrapperInput.setAttribute('autofocus', 123)
body.append(wrapperInput)
body.append(wrapper)
let wrapperNumber = document.createElement('div')
wrapperNumber.classList.add('wrapperNumber')

let resMemory = 'En'
// window.localStorage.setItem('name', `${resMemory}`)
let memory = resMemory
function getMemory(){
    if(!window.localStorage.getItem('name-key')){
// memory = 'En'
window.localStorage.setItem('name-key', `${memory}`)
    }else{
        memory =  window.localStorage.getItem('name-key')
    }

}

    // window.localStorage.getItem('name')
console.log(window.localStorage.getItem('name-key'));

let wrapperRow1 = document.createElement('div')
wrapperRow1.classList.add('wrapperRow1')
let wrapperRow2 = document.createElement('div')
wrapperRow2.classList.add('wrapperRow2')
let wrapperRow3 = document.createElement('div')
wrapperRow3.classList.add('wrapperRow3')
let wrapperRow4 = document.createElement('div')
wrapperRow4.classList.add('wrapperRow4')



// let wrapperArrow = document.createElement('div') 
// wrapperArrow.classList.add('wrapperArrow')
// wrapper.append(wrapperArrow)
// let containerArrows = document.createElement('div')
// containerArrows.classList.add('containerArrows')
// wrapperArrow.append(containerArrows)
// addRows()



// row1Hard = [...wrapperRow1.children]
// row2Hard = [...wrapperRow2.children]
// row3Hard = [...wrapperRow3.children]
// row4Hard = [...wrapperRow4.children]
// row5Hard = [...containerArrows.children]


function addButtons(){

    for(let i = 0;i < rowNumber.length;i++){
        let btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = rowNumber[i].key
        wrapperNumber.append(btn)
        btn.addEventListener('click',mause)
    }
    wrapper.append(wrapperNumber)
    for(let i = 0;i < row1.length;i++){
        let btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = row1[i][ `key${memory}`]
        wrapperRow1.append(btn)
        btn.addEventListener('click',mause)
        // console.log(btn.innerHTML );
    }
    wrapper.append(wrapperRow1)
    for(let i = 0;i < row2.length;i++){
        let btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = row2[i][ `key${memory}`]
        wrapperRow2.append(btn)
        btn.addEventListener('click',mause)
    }
    wrapper.append(wrapperRow2)

    for(let i = 0;i < row3.length;i++){
        let btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = row3[i][ `key${memory}`]
        wrapperRow3.append(btn)
        btn.addEventListener('click',mause)
        // console.log(btn);
    }
    wrapper.append(wrapperRow3)
// ===============================================================
// let wrapperRow4 = document.createElement('div')
// wrapperRow4.classList.add('wrapperRow4')

let shift = document.createElement('div')
shift.classList.add('shift')
shift.innerHTML = 'Shift'
wrapperRow4.append(shift)

let ctrl = document.createElement('div')
    ctrl.classList.add('ctrl')
    ctrl.innerHTML = 'Ctrl'
    wrapperRow4.append(ctrl)

let alt = document.createElement('div')
    alt.classList.add('alt')
    alt.innerHTML = 'Alt'
    wrapperRow4.append(alt)

    let space = document.createElement('div')
    space.classList.add('space')
    space.innerHTML = 'Space'
    wrapperRow4.append(space)
//   =================================================
let backspace = document.createElement('div') 
backspace.classList.add('backspace')
backspace.innerHTML = 'Backspace'
wrapperRow1.append(backspace)

    wrapper.append(wrapperRow4)
    let del = document.createElement('div') 
del.classList.add('del')
del.innerHTML = 'Delete'
wrapperRow2.append(del)

let enter = document.createElement('div')
enter.classList.add('enter')
enter.innerHTML = 'Enter'
wrapperRow2.append(enter)


    row1Hard = [...wrapperRow1.children]
    row2Hard = [...wrapperRow2.children]
    row3Hard = [...wrapperRow3.children]
    row4Hard = [...wrapperRow4.children]
    wrapperNumberHard = [...wrapperNumber.children]
    // console.log(wrapperNumber.children);
}


function addRows(){
let wrapperArrow = document.createElement('div') 
wrapperArrow.classList.add('wrapperArrow')
wrapper.append(wrapperArrow)

let arrowTop = document.createElement('div')
arrowTop.classList.add('arrowTop')
arrowTop.innerHTML = '🠕'
wrapperArrow.append(arrowTop)

let containerArrows = document.createElement('div')
containerArrows.classList.add('containerArrows')
wrapperArrow.append(containerArrows)

let arrowLeft = document.createElement('div')
arrowLeft.classList.add('arrowLeft')
arrowLeft.innerHTML = '🠔'
containerArrows.append(arrowLeft)

let arrowBottom = document.createElement('div')
arrowBottom.classList.add('arrowBottom')
arrowBottom.innerHTML = '🠗'
containerArrows.append(arrowBottom)

let arrowRight = document.createElement('div')
arrowRight.classList.add('arrowRight')
arrowRight.innerHTML = '🠖'
containerArrows.append(arrowRight)

row5Hard = [...containerArrows.children,arrowTop]
// console.log(row5Hard);
}
// window.localStorage.clear()
getMemory()
addRows()
addButtons()


// body.addEventListener('keyup',getKey)