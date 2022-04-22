// This is for the object creation of the invoice
let invoice =[
    { 
        task:"Wash Car",
        bill: 10
    },
    {
        task: "Mow Lawn",
        bill: 20
    },
    {
        task: "Pull Weeds",
        bill:30
    }
]
let totalbill =[]
//fetching the value from the buton using addeventlistener
const carBtn = document.getElementById('billwash')
let  mowBtn = document.getElementById('mow')
const pullBtn = document.getElementById('billpull')
let washCar =document.getElementById('washCar')
let washCarPrice =document.getElementById('washCarPrice')
let mowLawn =document.getElementById('mowLawn')
let mowLawnPrice =document.getElementById('mowLawnPrice')
let totalamount =document.getElementById('totalamount')

let pullWeeds=document.getElementById('pullWeeds')
let pullWeedsPrice =document.getElementById('pullWeedsPrice')


 carBtn.addEventListener("click",function(){
     totalbill.push(invoice[0].bill)
     washCar.innerHTML =invoice[0].task
     washCarPrice.innerHTML =`$${invoice[0].bill}`
     carBtn.disabled =true
     totalnotes()

})

mowBtn.addEventListener("click", function(){
    totalbill.push(invoice[1].bill)
    mowLawn.innerHTML =invoice[1].task
    mowLawnPrice.innerHTML =`$${invoice[1].bill}`
    mowBtn.disabled=true
    totalnotes()
})

pullBtn .addEventListener("click",function(){
    totalbill.push(invoice[2].bill)
    pullWeeds.innerHTML =invoice[2].task
    pullWeedsPrice.innerHTML =`$${invoice[2].bill}`
    pullBtn.disabled =true
    totalnotes()
})
function totalnotes(){
    let sum = 0;

    for (let i = 0; i < totalbill.length; i++) {
     sum += totalbill[i];
     totalamount.textContent=`$${sum}`

}
}
