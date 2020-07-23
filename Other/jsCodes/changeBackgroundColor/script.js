

function genC(){
    return "#" + Math.floor(Math.random()* 16777215).toString(16)
}

function colorgreen(){
    var c = genC();
    document.body.style.backgroundColor = c;
}