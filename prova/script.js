const btn = document.getElementById("btn");
const msg = document.getElementById("num");
const msgMeta = document.getElementById("meta");
var numClick = 0;

btn.addEventListener('click', function(){
    msg.innerText = ++numClick;
    
    switch(numClick){
        case 10:
            msgMeta.innerText = "Parabéns você atingiu a meta!";
            break;
        case 20:
            msgMeta.innerText = "Parabéns você dobrou a meta!";
            break;
        case 100:
            msgMeta.innerText = "Por que?";
            break;
        case 200:
            msgMeta.innerHTML = "Você sabe que já pode ir embora, né?";
            break;
        case 300:
            msgMeta.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
            break;
    }
})



