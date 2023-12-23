const timerShw =  document.getElementById("timer-show")
function startTimer(){
    const h = document.getElementById("inputh").value || 0
    const m = document.getElementById("inputm").value || 0
    const s = document.getElementById("inputs").value || 0
    if(!h && !m && !s){
        alert("Enter valid time")
        return
    }
    const totlTime= parseInt(h)*3600+parseInt(m)*60+parseInt(s)

    creatTimer(totlTime);
    clearFields();
}
function clearFields(){
    document.getElementById("inputh").value = ""
    document.getElementById("inputm").value = ""
    document.getElementById("inputs").value = ""
}
function creatTimer(totlTime){
    const timerDiv = document.createElement("div")
    timerDiv.setAttribute("class","setter")
    const timerDsply = document.createElement("span")
    
    const timeInterval = setInterval(()=>{
        totlTime--;
        const dsplyhr = Math.floor(totlTime/3600);
        const dsplymin = Math.floor((totlTime%3600)/60);
        const dsplysec = Math.floor(totlTime%60);
        timerDsply.textContent = ` Time Left: ${dsplyhr}: ${dsplymin}: ${dsplysec} `
        timerDiv.appendChild(timerDsply);
        timerDiv.appendChild(stpBtn)
        timerDiv.appendChild(dltBtn)
        timerShw.appendChild(timerDiv);

        if(totlTime<=0){
            clearInterval(timeInterval);
            const end_msg = document.createElement("div")
            end_msg.innerText="Timer is Up!"
            timerDiv.innerHTML=""
            timerDiv.appendChild(end_msg)
             timerDiv.appendChild(dltBtn)
        }
    },1000)
    
    
    const stpBtn = document.createElement("button")
    stpBtn.textContent = "Stop"
    stpBtn.onclick= ()=>{
        clearInterval(timeInterval)
    }
    const dltBtn = document.createElement("button")
    dltBtn.textContent = "Delete"
    dltBtn.onclick= ()=>{
        clearInterval(timeInterval)
        timerDiv.remove();
    }
}