document.querySelector("#receita_abacate").addEventListener("click", () => {
    let receita_screen = document.createElement("div");

    Object.assign(receita_screen.style, { 
        width: "600px", 
        height: "600px", 
        backgroundColor: "white",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderStyle: "none",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0px 6px 10px rgba(0,0,0,0.2)"
    });

    let div01 = document.createElement("div");
    div01.classList.add("div01");

    let div02 = document.createElement("div");
    div02.classList.add("div02");
 
    let button = closeButton(receita_screen);

    div01.appendChild(button);

    let title = document.createElement("span");
    title.innerText = "Tigela de Abacate";
    title.classList.add("Screen_title");

    div02.appendChild(title);

    receita_screen.append(div01, div02);
    document.body.appendChild(receita_screen);
    console.log("click");
});

let closeButton = (receita_screen) => {
    let button = document.createElement("button");
    button.innerText = "x";
    button.classList.add("button_close_screen");

    button.addEventListener("click", () => {
        if(receita_screen){
            document.body.removeChild(receita_screen);
        }
    });
    return button;
}