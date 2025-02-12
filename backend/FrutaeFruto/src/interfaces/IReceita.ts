export type Passo = {
    tituloPasso: string,
    passos: string[],
};

export interface Receita {
    id?: number,
    titulo:string,
    passos:Passo[],
    imagemUrl:string 
}

