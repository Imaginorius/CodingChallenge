 function sendlog() {
   
     var nom=document.getElementById("name").value;
     var mail=document.getElementById("mdp").value;
     var mdp=document.getElementById("mail").value;
     dispcarac.innerHTML=nom;
     
     if(nom==1) {
        dispcarac.innerHTML="remplir champs"
     }

 };