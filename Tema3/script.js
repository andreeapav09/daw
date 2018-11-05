var numar = 0;

function setText(id,newvalue) {
    var s= document.getElementById(id);
    s.innerHTML = newvalue;
}

function adunare() {
    numar += 1;
    setText("numar", numar);
  }

function resetare() {
    numar = 0;
    setText("numar", numar);
}
  

function scadere() {
    numar -= 1;
    setText("numar", numar);
  }
  
  
