let url="http://universities.hipolabs.com/search?name=";





let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{


    let inp=document.querySelector("input");
let country=inp.value;


let clgArray=await getuniversity(country);
show(clgArray);



})


function show(clgArray){

    let clgList=document.querySelector("ul");
     clgList.innerText="";
    for(clg of clgArray){
        console.log(clg.name);
        let li=document.createElement("li");
        li.innerText=clg.name;


        clgList.appendChild(li);
    
    
    }



}


async function getuniversity(country){
    try{
        let res=await axios.get(url+country);
       return (res.data);
    }
catch(e){
    return ("error",e);
}
}

// press enter to search
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log(event.code);

    if (event.code=="Enter"){
        btn.click();  //trigger button on click
    }

})