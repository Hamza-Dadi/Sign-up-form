const nom=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    if(nom.value=="" || email.value=="" || password.value==""){
        alert("veuillez remplir tous les champs");
    }
})