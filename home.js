  //every elements are stored in cellElements
const cellElements=document.querySelectorAll('[data-cell]')

//7 colums are stored in 7 differnt seprate variables
const column1Elements=document.querySelectorAll('.cl1')
const column2Elements=document.querySelectorAll('.cl2')
const column3Elements=document.querySelectorAll('.cl3')
const column4Elements=document.querySelectorAll('.cl4')
const column5Elements=document.querySelectorAll('.cl5')
const column6Elements=document.querySelectorAll('.cl6')
const column7Elements=document.querySelectorAll('.cl7')


//full win msg and restart div element
const winningMessageElement = document.getElementById('win-msg')
const restartButton = document.getElementById('.restartButton')
//to write who wins red or yellow
const winningMessageTextElement = document.querySelector('.text')
const turn=document.querySelector('.turn')


//when any of the div is clicked red or yellow class to add in the class list
const RED_CLASS='Red'
const YELLOW_CLASS='Yellow'

//to swap the turns whether it is red or yellow
let redTurn
let currentClass 

//used in filling the div elements from the last coluns
    let c1=5
    let c2=5
    let c3=5
    let c4=5
    let c5=5
    let c6=5
    let  c7=5

    //used in for loops
    let  i
    let j

    //winning combinations
 let winningCombination=[]
 //to store the winning combination in array
 let m=0

  
//horizontal line
for(i=0;i<42;i=i+7)
{
    for(j=0;j<4;j++)
    {
        let k=i+j
         
        winningCombination[m]=[k,k+1,k+2,k+3]
        m++
       
    }
} 

//reverse slanting
for(i=41;i>=21;i=i-7)
{
    for(j=6;j>=3;j--)
    {
        let k=i-j
         
         
        winningCombination[m]=[k,k-6,k-12,k-18]
        m++
    }
} 
//slanting
for(i=0;i<=20;i=i+7)
{
    for(j=0;j<4;j++)
    {
        let k=i+j
winningCombination[m]=[k,k+8,k+16,k+24]
m++


    }}

//vertical
for(i=0;i<=20;i++)
{
    
    winningCombination[m]=[i,i+7,i+14,i+21]
m++
}


 



startgame()

function startgame(){
    redTurn=false
    currentClass=YELLOW_CLASS
    turn.innerText=currentClass
    column1Elements.forEach(cell=>{
        cell.addEventListener('click',handleclick1 )
    })

    column2Elements.forEach(cell=>{
        cell.addEventListener('click',handleclick2 )
    })

    column3Elements.forEach(cell=>{
        cell.addEventListener('click',handleclick3 )
    })

    column4Elements.forEach(cell=>{
        cell.addEventListener('click',handleclick4 )
    })

    column5Elements.forEach(cell=>{
        cell.addEventListener('click',handleclick5 )
    })

    column6Elements.forEach(cell=>{
        cell.addEventListener('click',handleclick6 )
    })

    column7Elements.forEach(cell=>{
        cell.addEventListener('click',handleclick7 )
    })
    

}


function handleclick1(){

    if(c1>-1)
    {
    column1Elements[c1].classList.add(currentClass)
    if(checkwin(currentClass)){
        endgame(false) 
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
    swapturns()
    }
    
    c1--


    
    }
    turn.innerText=currentClass
}

function handleclick2(){
    if(c2>-1)
    {
    column2Elements[c2].classList.add(currentClass)
    if(checkwin(currentClass)){
        endgame(false) 
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
    swapturns()
    }
    c2=c2-1
    turn.innerText=currentClass
    }
    
}

function handleclick3(){
    if(c3>-1){
    column3Elements[c3].classList.add(currentClass)
    if(checkwin(currentClass)){
        endgame(false) 
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
    swapturns()
    }
    c3--
    turn.innerText=currentClass
}
}

function handleclick4(){
    if(c4>-1){
    column4Elements[c4].classList.add(currentClass)
    
     if(checkwin(currentClass)){
        endgame(false) 
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
    swapturns()
    }
    c4--
    turn.innerText=currentClass
    }
}

function handleclick5(){
    if(c5>-1){
    column5Elements[c5].classList.add(currentClass)
    
     if(checkwin(currentClass)){
        endgame(false) 
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
    swapturns()
    }
    c5--
    turn.innerText=currentClass
    }
}

function handleclick6(){
    if(c6>-1){
    column6Elements[c6].classList.add(currentClass)
    
     if(checkwin(currentClass)){
        endgame(false) 
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
    swapturns()
    }
    c6--
    turn.innerText=currentClass
    }
}

function handleclick7(){
    if(c7>-1){
    
    column7Elements[c7].classList.add(currentClass)
    if(checkwin(currentClass)){
        endgame(false) 
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
    swapturns()
    }
    c7--
    turn.innerText=currentClass
    }
}

function swapturns(){
    redTurn=!redTurn
    currentClass=redTurn?RED_CLASS:YELLOW_CLASS
}

function checkwin(currentClass){
    
     
    console.log(currentClass)
    return winningCombination.some(combination=>{
        return combination.every(index=>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endgame(draw){
    if(draw){
        winningMessageTextElement.innerText='Draw!'
        console.log('vasanth')

    }
    else{
        winningMessageTextElement .innerText=`${redTurn?RED_CLASS:YELLOW_CLASS}  Win`
        console.log('anbu')
    }
    winningMessageElement .classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
      return cell.classList.contains(RED_CLASS) || cell.classList.contains(YELLOW_CLASS)
    })
  }

  restartButton.addEventListener('click', restart)
  

  function restart(){
    location.reload();
  }