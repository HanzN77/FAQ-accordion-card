const button = document.querySelectorAll(".text");
const datas = document.querySelectorAll(".contents");
const rotate = document.querySelectorAll(".arrow-down");
const bold = document.querySelectorAll(".title-text h3");


function showUp(i){
    if(datas[i].style.display == "none"){
        datas[i].style.display = "block";
        rotate[i].style.transform = "rotate(180deg)";
        bold[i].style.fontWeight = "700";

    } else{
        datas[i].style.display = "none";
        rotate[i].style.transform = "rotate(0deg)";
        bold[i].style.fontWeight = "400";
    }

}