export interface ApiResponse{
    results: Character[]
}

export interface Character{
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    created:string;
    id: string
}


export interface CharacterParams{
    name:string;
    status:string;
}
//need to try with a class