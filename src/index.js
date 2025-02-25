let screen_title = (titleContent) => {
    let div = document.createElement("div");
    div.classList.add("div_screen_title");

    let title = document.createElement("span");
    title.classList.add("Screen_title");
    title.innerText = titleContent;

    div.appendChild(title);
    return div;
}

let criarPreparo = (etapas) => {
    let div = document.createElement("div");

    let modoPreparo = document.createElement("span");
    modoPreparo.innerText = "Modo de Preparo:";
    modoPreparo.classList.add("Screen_subTitle");

    etapas.forEach(etapa => {
        let etapaDiv = document.createElement("div");
        etapaDiv.classList.add("Screen_steps");

        let etapaTitulo = document.createElement("span");
        etapaTitulo.innerText = etapa.tituloPasso;
        etapaTitulo.classList.add("Screen_stepTitle");
        etapaDiv.appendChild(etapaTitulo);

        etapa.passos.forEach(passoTexto => {
            let passo = document.createElement("span");
            passo.innerText = `- ${passoTexto}`;
            passo.classList.add("step");
            etapaDiv.appendChild(passo);
        });

        div.appendChild(etapaDiv);
    });

    return div;
};


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

async function verReceita(id){
    try{
        const response = await fetch(`https://fruta-fruto-api-1.onrender.com/api/receitas/${id}`);
        
        const receita = await response.json();
        
        let receita_screen = document.createElement("div");
        let close_button = closeButton(receita_screen);
        let title = screen_title(receita.titulo);
        let modoPreparo = criarPreparo(receita.passo);
        
        receita_screen.classList.add("receita_screen");
        receita_screen.append(close_button,title,modoPreparo);
        
        document.body.appendChild(receita_screen);
        
    }catch(error){
        console.log("Erro: ", error);
    }
}


