var tablinks=document.getElementsByClassName("tabs-links")
var tabcontents=document.getElementsByClassName("tab-contents") 

function opentab(tabname){
    for(tlink of tablinks){
        tlink.classList.remove("active-links")
    }

    for(tcontent of tabcontents){
        tcontent.classList.remove("active-tabs")
    }

    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tabs")
}