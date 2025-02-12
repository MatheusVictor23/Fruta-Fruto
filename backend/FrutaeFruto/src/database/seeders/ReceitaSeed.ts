import { Receita } from "../../interfaces/IReceita";

const receitaAbacate:Receita = {
    titulo: "Tigela de abacate",
    passos: [
        {
            tituloPasso: "1. Preparar os ingredientes",
            passos: [
                "Lave e descasque 3 beterrabas médias",
                "Corte as beterrabas em cubos ou fatias grossas"
            ]
        },
        {
            tituloPasso: "2. Bater os ingredientes",
            passos: [
                "Adicione a banana e o abacate no liquidificador",
                "Bata até obter uma textura cremosa e homogênea"
            ]
        },
        {
            tituloPasso: "3. Montagem",
            passos: [
                "Despeje a mistura em uma tigela",
                "Decore com frutas picadas, granola e coco ralado"
            ]
        },
        {
            tituloPasso: "4. Servir",
            passos: [
                "Sirva imediatamente e aproveite sua tigela refrescante e cheia de nutrientes!"
            ]
        }
    ],
    imagemUrl: "https://exemplo.com/imagem.jpg"
}

const receitaKiwi:Receita = {
    titulo: "Tigela de kiwi",
    passos: [
        {
            tituloPasso: "1. Preparar o molho",
            passos: [
                "Em uma tigela pequena, misture o suco de 1 limão, 2 colheres de sopa de azeite, 1 colher de chá de melado (opcional), sal e pimenta a gosto",
                "Reserve o molho para usar depois"
            ]
        },
        {
            tituloPasso: "2. Preparar os ingredientes",
            passos: [
                "Descasque e fatie 3 kiwis maduros",
                "Corte 1 pepino médio em rodelas finas",
                "Fatie finamente 1/2 cebola roxa pequena",
                "Separe um punhado de folhas de hortelã fresca"
            ]
        },
        {
            tituloPasso: "3. Montar a salada",
            passos: [
                "Em uma tigela grande, adicione o kiwi, pepino, cebola roxa e hortelã",
                "Se desejar, adicione rúcula ou espinafre para mais verde",
                "Regue com o molho preparado e misture delicadamente"
            ]
        },
        {
            tituloPasso: "4. Finalizar",
            passos: [
                "Polvilhe nozes ou castanhas picadas por cima para dar crocância"
            ]
        },
        {
            tituloPasso: "5. Servir",
            passos: [
                "Sirva imediatamente e aproveite essa salada refrescante e saborosa!"
            ]
        }
    ],
    imagemUrl: "https://exemplo.com/imagem.jpg"
}

const receitaVegetaisKiwi:Receita = {
    titulo: "Mix de vegetais",
    passos: [
        {
            tituloPasso: "1. Preparar os ingredientes",
            passos: [
                "Lave 3 pimentões (vermelho, amarelo e verde)",
                "Corte os pimentões em tiras finas no estilo Juliana",
                "Pique 1 dente de alho"
            ]
        },
        {
            tituloPasso: "2. Refogar os pimentões",
            passos: [
                "Aqueça azeite em uma frigideira",
                "Adicione o alho picado e refogue até dourar levemente",
                "Acrescente os pimentões e cozinhe por 5-8 minutos até ficarem macios, mas ainda crocantes"
            ]
        },
        {
            tituloPasso: "3. Temperar",
            passos: [
                "Tempere com sal, pimenta e um fio de vinagre balsâmico para realçar o sabor",
                "Misture bem e cozinhe por mais 1-2 minutos"
            ]
        },
        {
            tituloPasso: "4. Servir",
            passos: [
                "Sirva quente ou frio como acompanhamento ou recheio de sanduíches"
            ]
        }
    ],
    imagemUrl: "https://exemplo.com/imagem.jpg"
}

const receitaPimentoes:Receita = {
    titulo: "Pimentões à Juliana",
    passos: [
        {
            tituloPasso: "1. Preparar os ingredientes",
            passos: [
                "Lave e corte 1 cenoura, 1 abobrinha e 1 brócolis em pedaços médios",
                "Pique 1 cebola e 2 dentes de alho"
            ]
        },
        {
            tituloPasso: "2. Cozinhar os vegetais",
            passos: [
                "Aqueça um fio de azeite em uma frigideira grande",
                "Refogue a cebola e o alho até dourarem",
                "Adicione os vegetais e cozinhe por 5-7 minutos, mexendo ocasionalmente"
            ]
        },
        {
            tituloPasso: "3. Temperar",
            passos: [
                "Tempere com sal, pimenta e ervas a gosto (orégano ou tomilho)",
                "Cozinhe por mais 2 minutos para incorporar os sabores"
            ]
        },
        {
            tituloPasso: "4. Servir",
            passos: [
                "Sirva quente como acompanhamento ou prato principal"
            ]
        }
    ],
    imagemUrl: "https://exemplo.com/imagem.jpg"
}

const receitaPratoOriental:Receita = {
    titulo: "Prato Oriental",
    passos: [
        {
            tituloPasso: "1. Preparar os ingredientes",
            passos: [
                "Corte 1 cenoura, 1 pimentão e 1 cebola em tiras finas",
                "Separe 1 xícara de cogumelos fatiados e 1 xícara de broto de feijão",
                "Cozinhe 200g de macarrão oriental (tipo bifum ou yakisoba) conforme instruções da embalagem"
            ]
        },
        {
            tituloPasso: "2. Refogar os vegetais",
            passos: [
                "Aqueça óleo de gergelim em uma wok ou frigideira grande",
                "Adicione os vegetais e refogue por 5 minutos em fogo alto"
            ]
        },
        {
            tituloPasso: "3. Adicionar o molho",
            passos: [
                "Misture 3 colheres de sopa de molho shoyu, 1 colher de sopa de vinagre de arroz e 1 colher de chá de gengibre ralado",
                "Despeje o molho sobre os vegetais e mexa bem",
                "Adicione o macarrão cozido e misture até incorporar os sabores"
            ]
        },
        {
            tituloPasso: "4. Servir",
            passos: [
                "Finalize com gergelim torrado e cebolinha picada",
                "Sirva quente"
            ]
        }
    ],
    imagemUrl: "https://exemplo.com/imagem.jpg"
}

const receitaBeterrabas:Receita = {
    titulo: "BeterrabasAssadas",
    passos: [
        {
            tituloPasso: "1. Preparar as beterrabas",
            passos: [
                "Lave e descasque 3 beterrabas médias",
                "Corte as beterrabas em cubos ou fatias grossas"
            ]
        },
        {
            tituloPasso: "2. Temperar",
            passos: [
                "Coloque as beterrabas em uma assadeira",
                "Tempere com azeite, sal, pimenta e ervas (como alecrim ou tomilho)",
                "Misture bem para que fiquem bem cobertas com o tempero"
            ]
        },
        {
            tituloPasso: "3. Assar",
            passos: [
                "Preaqueça o forno a 200°C",
                "Asse as beterrabas por 30-40 minutos, mexendo na metade do tempo, até ficarem macias e caramelizadas"
            ]
        },
        {
            tituloPasso: "4. Servir",
            passos: [
                "Sirva quente como acompanhamento ou adicione em saladas",
                "Finalize com um fio de vinagre balsâmico para realçar o sabor"
            ]
        }
    ],
    imagemUrl: "https://exemplo.com/imagem.jpg"
}


export {receitaAbacate,receitaKiwi,receitaBeterrabas,receitaPimentoes,receitaVegetaisKiwi,receitaPratoOriental};