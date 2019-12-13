 function sendlog() {
   
     var nom=document.getElementById("name").value;
     var mail=document.getElementById("mdp").value;
     var mdp=document.getElementById("mail").value;
     oninput="countchar()"
     
     if(nom==1) {
       document.getElementById("affichage").innerHTML="remplir le champs"
     }

 };