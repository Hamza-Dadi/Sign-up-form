const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  const mail = email.value.trim();
  const pass = password.value;

  if (mail === "" || pass === "") {
    alert("Veuillez remplir tous les champs");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === mail && u.password === pass);

  if (!user) {
    alert("Email ou mot de passe incorrect");
    return;
  }

  alert(`Connexion réussie ! Bienvenue ${user.nom}`);
  email.value = "";
  password.value = "";
});
