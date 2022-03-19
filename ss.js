let sec=0
let min=0
let hour=0
setInterval(()=>{
    document.querySelector(".hour").style.transform=`rotatez(${hour}deg)`
    hour+=1   
},3600000)

setInterval(()=>{
    document.querySelector(".min").style.transform=`rotatez(${min}deg)`
    min+=1
},60000)

setInterval(()=>{
    document.querySelector(".sec").style.transform=`rotatez(${sec}deg)`
    sec+=1;
},1000)
