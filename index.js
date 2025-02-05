document.querySelector("#receita_abacate").addEventListener("click", (event) => {
    let receita_screen = document.createElement("div");
    let close_button = closeButton(receita_screen);
    let title = screen_title((event.target.parentElement.querySelector("h4").innerText));
    let modoPreparo = preparo();
    
    receita_screen.classList.add("receita_screen");
    receita_screen.append(close_button,title,modoPreparo);

    document.body.appendChild(receita_screen);
});


let screen_title = (titleContent) => {
    let div = document.createElement("div");
    div.classList.add("div_screen_title");

    let title = document.createElement("span");
    title.classList.add("Screen_title");
    title.innerText = titleContent;

    div.appendChild(title);
    return div;
}

let preparo = () => {
    let div = document.createElement("div");
    let modoPreparo = document.createElement("span");
    modoPreparo.innerText = "Modo de Preparo:";
    modoPreparo.classList.add("Screen_subTitle");

    let step01 = step("1. Preparar os ingredientes", "Cortar uma banana congelada em fatias", "Tirar a polpa de um abacate");
    let step02 = step("2. Bater os ingredientes", "Adicione a banana e o abacate no liquidificador", "Bata até obter uma textura cremosa e homogênea");
    let step03 = step("3. Montagem", "Despeje a mistura em uma tigela", "Decore com frutas picadas, granola e coco ralado");
    let step04 = step("4. Servir", "Sirva imediatamente e aproveite sua tigela refrescante e cheia de nutrientes! ");
    div.append(modoPreparo, step01, step02,step03,step04);
    return div;
}

let closeButton = (receita_screen) => {
    let div = document.createElement("div");
    div.classList.add("div_close_button");

    let button = document.createElement("button");
    button.innerText = "x";
    button.classList.add("button_close_screen");

    button.addEventListener("click", () => {
        if(receita_screen){
            document.body.removeChild(receita_screen);
        }
    });

    div.appendChild(button);
    return div;
}

let step = (stepText, ...steps) => {
    let div = document.createElement("div");
    div.classList.add("Screen_steps");

    let stepTitle = document.createElement("span");
    stepTitle.innerText = stepText;
    stepTitle.classList.add("Screen_stepTitle");
    div.appendChild(stepTitle);
    
    for(let i = 0; i <=(steps.length - 1); i++){
        let step = document.createElement("span");
        step.innerText = `- ${steps[i]}`;
        step.classList.add("step")
        div.appendChild(step);
    }

    return div;
}