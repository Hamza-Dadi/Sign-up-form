const nom=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    if(nom.value=="" || email.value=="" || password.value==""){
        alert("veuillez remplir tous les champs");
    }
    else if(password.value.length<8){
        alert("Le mot de passe doit contenir au moins 8 caractères");
    }
    else{
        alert("Inscription réussie"+"nom: "+nom.value+" email: "+email.value+" password: "+password.value);
    }
});
btn.addEventListener("click",()=>{
  const name=nom.value;
  const mail=email.value;
  const pass=password.value;
    const users=JSON.parse(localStorage.getItem("users")) || [];
    users.push({nom: name, email: mail, password: pass});
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Inscription réussie ! nom: ${name} email: ${mail} password: ${pass}`);
    nom.value=email.value=password.value="";

})