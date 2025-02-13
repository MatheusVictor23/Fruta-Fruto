export type Passo = {
    tituloPasso: string,
    passos: string[],
};

export interface IReceita {
    id?: number,
    titulo:string,
    passo:Passo[],
    imagemUrl:string 
}

