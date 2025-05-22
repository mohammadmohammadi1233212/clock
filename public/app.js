const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(()=>{
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    
    hrs.innerHTML = currentDate.getHours();
    min.innerHTML = currentDate.getMinutes();
    sec.innerHTML = currentDate.getSeconds();
},1000);




let number = [60, 40, 50, 100];
number.values+=number.values;