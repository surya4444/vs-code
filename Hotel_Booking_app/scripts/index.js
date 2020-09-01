document.getElementsByClassName("city-list")[1].style.display="none";
function scrollDown(){

    var viewText = document.getElementById("viewBtn");
    var citylist = document.getElementsByClassName("city-list")[1];

    if(citylist.style.display === "none"){
        citylist.style.display = "flex";
        viewText.innerHTML = "View Less";
    }
    else{
        citylist.style.display = "none"
        viewText.innerHTML ="View More"
    }
}