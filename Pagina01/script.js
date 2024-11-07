function trocarCor() {
    if (document.body.style.backgroundColor === "#e7e0d2") {
       
        document.body.style.backgroundColor = "#e7e0d2";
        document.body.style.color = "#113e4e";

        document.getElementById("button-header").textContent = "Modo Escuro"
    } else {
      
        document.body.style.backgroundColor = "#4d7c8d";
        document.body.style.color = "white";

        document.getElementById("button-header").textContent = "Modo Claro"

      
    };
}