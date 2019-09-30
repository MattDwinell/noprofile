document.addEventListener("DOMContentLoaded", ()=>{
    console.log('js connected');
    setTimeout(showPage, 10);
    // setTimeOut(showPage, 1000);
    function showPage(){
    let element = document.getElementById("body");
    element.classList.remove("fade-out");
    }
})