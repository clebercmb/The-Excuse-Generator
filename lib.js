
function switchIndex(max) {

    return Math.floor(Math.random()*max)
}


let excuse = () => {

    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let indexWho = switchIndex(who.length);
    let indexWhat = switchIndex(what.length);
    let indexWhen = switchIndex(when.length);


    return who[indexWho]+" "+what[indexWhat] +" "+ when[indexWhen];
}

window.onload = function() {
    let excuseMsg = document.getElementById("excuse")
    excuseMsg.innerHTML = excuse()
}