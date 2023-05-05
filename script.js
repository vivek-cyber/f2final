searchitems()
let tab=document.getElementById("tbo")
let tab2=document.getElementById("tbo2")



let s1=document.getElementById("s1")
let s2=document.getElementById("s2")
let s3=document.getElementById("s3")
let s4=document.getElementById("s4")
let s5=document.getElementById("s5")
let s6=document.getElementById("s6")



function searchitems()
{
    table2.style.display="none"
    
    let x=f1()
    x.then((data)=>
    { 
        let finalprom=data.json()
       finalprom.then((finaldata)=>{
const serachitem=document.getElementById("search")
           console.log(finaldata)
            console.log(serachitem.value)

            let find=serachitem.value
            tab.innerHTML=""

let searchresult=[]
for(i in finaldata)
{
    
    if(finaldata[i]["first_name"].toLowerCase().includes(find,0)||finaldata[i]["last_name"].toLowerCase().includes(find,0)||finaldata[i]["email"].toLowerCase().includes(find,0))
    {
        display(finaldata[i])
        searchresult.push(finaldata[i])
    }
}

s1.addEventListener("click",()=>{
    searchresult.sort((a, b) => (a.first_name > b.first_name) ? 1: -1);
    console.log(searchresult)
    tab.innerHTML=""
    for(i in searchresult)
    {
        display(searchresult[i])
    }
    table2.style.display="none"
    tab2.innerHTML=""
})

s2.addEventListener("click",()=>{
    searchresult.sort((a, b) => (a.first_name < b.first_name) ? 1: -1);
    console.log(searchresult)
    tab.innerHTML=""
    for(i in searchresult)
    {
        display(searchresult[i])
    }
    table2.style.display="none"
    tab2.innerHTML=""
})

s3.addEventListener("click",()=>{
    searchresult.sort((a, b) => (a.marks > b.marks) ? 1: -1);
    console.log(searchresult)
    tab.innerHTML=""
    for(i in searchresult)
    {
        display(searchresult[i])
    }
    table2.style.display="none"
    tab2.innerHTML=""
})

s4.addEventListener("click",()=>{
    
    console.log(searchresult)
    tab.innerHTML=""
    for(i in searchresult)
    {
        if(searchresult[i]["passing"]==true)
        {
        display(searchresult[i])
        }
    }
    table2.style.display="none"
    tab2.innerHTML=""
})

s5.addEventListener("click",()=>{
    
    searchresult.sort((a, b) => (a.class > b.class) ? 1: -1);
    console.log(searchresult)
    tab.innerHTML=""
    for(i in searchresult)
    {
        display(searchresult[i])
    }
    table2.style.display="none"
    tab2.innerHTML=""
})

s6.addEventListener("click",()=>{
   

    tab.innerHTML=""
    tab2.innerHTML=""
    for(i in searchresult)
    {
        if(searchresult[i]["gender"]=="Female")
        {
        display(searchresult[i])
        console.log(searchresult[i])
        }
    }

    table2.style.display="table"
    for(i in searchresult)
    {
        if(searchresult[i]["gender"]=="Male")
        {
        display2(searchresult[i])
        console.log(searchresult[i])
        }
    }

})



       })
    })
    
}

    
function display(obj)
{
console.log()
    
let newrow=document.createElement("tr");

let td1=document.createElement("td");
td1.innerText=obj["id"]
newrow.appendChild(td1)

let td2=document.createElement("td");
let profile= document.createElement('img')
td2.id="name"

profile.src=obj["img_src"]
profile.setAttribute("height", "70");
profile.setAttribute("alt", "profilepic");
td2.appendChild(profile);
profile.style.borderRadius="35px"
profile.style.border="1px solid black"

let td21=document.createElement("div");
td21.innerText=obj["first_name"]+obj["last_name"]
td2.appendChild(td21)
newrow.appendChild(td2);

let td3=document.createElement("td");
td3.innerText=obj["gender"]
newrow.appendChild(td3)

let td4=document.createElement("td");
td4.innerText=obj["class"]
newrow.appendChild(td4)

let td5=document.createElement("td");
td5.innerText=obj["marks"]
newrow.appendChild(td5)

let td6=document.createElement("td");
if(obj["passing"]==true)
{
td6.innerText="Passed"}
else{
    td6.innerText="Failed" 
}
newrow.appendChild(td6)

let td7=document.createElement("td");
td7.innerText=obj["email"]
newrow.appendChild(td7)


tab.appendChild(newrow)
}



function display2(obj)
{
console.log()
    
let newrow=document.createElement("tr");

let td1=document.createElement("td");
td1.innerText=obj["id"]
newrow.appendChild(td1)

let td2=document.createElement("td");
let profile= document.createElement('img')
td2.id="name"

profile.src=obj["img_src"]
profile.setAttribute("height", "70");
profile.setAttribute("alt", "profilepic");
td2.appendChild(profile);
profile.style.borderRadius="35px"
profile.style.border="1px solid black"

let td21=document.createElement("div");
td21.innerText=obj["first_name"]+obj["last_name"]
td2.appendChild(td21)
newrow.appendChild(td2);

let td3=document.createElement("td");
td3.innerText=obj["gender"]
newrow.appendChild(td3)

let td4=document.createElement("td");
td4.innerText=obj["class"]
newrow.appendChild(td4)

let td5=document.createElement("td");
td5.innerText=obj["marks"]
newrow.appendChild(td5)

let td6=document.createElement("td");
if(obj["passing"]==true)
{
td6.innerText="Passed"}
else{
    td6.innerText="Failed" 
}
newrow.appendChild(td6)

let td7=document.createElement("td");
td7.innerText=obj["email"]
newrow.appendChild(td7)


tab2.appendChild(newrow)
}

    



async function f1()
{
   let url="./temp.json"
 let prom=await fetch(url)
   return prom      
}















// let x=f1(url)
//     x.then((data)=>
//     { 
//         let finalprom=data.json()
//        finalprom.then((finaldata)=>{
           
//            console.log(finaldata)

//        })
//     })











