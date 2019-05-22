var strength=17;
var charisma=12;
var intelligence=15;
var agility=11;

/* Dieser Event-Listener ist nur dafuer da, dass das Skript
   wartet, bis das HTML-Dokument fertig geladen ist.
   Die wichtigen Zeilen sind innerhalb der geschweiften Klammern */
document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById("strength").innerHTML = strength;
    document.getElementById("charisma").innerHTML = charisma;
    document.getElementById("intelligence").innerHTML = intelligence;
    document.getElementById("agility").innerHTML = agility;    
}, false);
