let Fname=document.querySelector('#firstName')
let Lname=document.querySelector('#lastName')
let address=document.querySelector('#addr')
let pin=document.querySelector('#pin')
let gender=document.querySelectorAll('.gender')
// let food=document.querySelector('.food')
let food=document.getElementsByName('food')
let state=document.querySelector('#state')
let country=document.querySelector('#country')
let submit=document.querySelector('button')
let table=document.querySelector('.data')


function tableData(){

}
submit.addEventListener('click',function(e){

    let tr=document.createElement('tr')

    let tdFname = document.createElement('td')
    tdFname.setAttribute('class','datas')
    tdFname.setAttribute('value',Fname.value)
    tdFname.innerText=Fname.value
    tr.appendChild(tdFname)


    let tdLname = document.createElement('td')
    tdLname.setAttribute('class','datas')
    tdLname.setAttribute('value',Lname.value)
    tdLname.innerText=Lname.value
    tr.appendChild(tdLname)

    let tdAddr = document.createElement('td')
    tdAddr.setAttribute('class','datas')
    tdAddr.setAttribute('value',address.value)
    tdAddr.innerText=address.value
    tr.appendChild(tdAddr)


    let tdPin = document.createElement('td')
    tdPin.setAttribute('class','datas')
    tdPin.setAttribute('value',pin.value)
    tdPin.innerText=pin.value
    tr.appendChild(tdPin)

    let tdGender = document.createElement('td')
    tdGender.setAttribute('class','datas')
    // for(let i=0;i<gender.length;i++){
    //     if(gender[i].checked)
    //     tdGenderValue.push(gender[i].value)
    // }
    let chck
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            chck=gender[i].value
            tdGender.setAttribute('value',gender[i].value)
            tdGender.innerText+=gender[i].value
        }
        
    }
    
    //console.log(chck)
    tr.appendChild(tdGender)

    let tdFood = document.createElement('td')
    tdFood.setAttribute('class','datas')
    for(let i=0;i<food.length;i++){
        if(food[i].checked)
        tdFood.innerText+=food[i].value+" "
    }
    
    tr.appendChild(tdFood)

    let tdState = document.createElement('td')
    tdState.setAttribute('class','datas')
    tdState.setAttribute('value',state.value)
    tdState.innerText=state.value
    tr.appendChild(tdState)

    let tdCountry = document.createElement('td')
    tdCountry.setAttribute('class','datas')
    tdCountry.setAttribute('value',country.value)
    tdCountry.innerText=country.value
    tr.appendChild(tdCountry)

    table.appendChild(tr)



    // console.log("called")
    // console.log(Fname.value)
    // console.log(Lname.value)
    // console.log(address.value)
    // console.log(pin.value)
    // for(let i=0;i<gender.length;i++){
    //     if(gender[i].checked)
    //     console.log(gender[i].value)
    // }
    // // console.log(food[0].value)
    // for(let i=0;i<food.length;i++){
    //     if(food[i].checked)
    //     console.log(food[i].value)
    // }
    
    // console.log(state.value)
    // console.log(country.value)

    
})
