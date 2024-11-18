function trocarCor() {
    if (document.body.style.backgroundColor === "white") {
       
        document.body.style.backgroundColor = "white";
        document.body.style.color = "green";

        document.getElementById("button-header").textContent = "Modo Escuro"
    } else {
      
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        document.getElementById("button-header").textContent = "Modo Claro"

      
    };
}
