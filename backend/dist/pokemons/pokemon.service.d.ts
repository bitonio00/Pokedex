import { HttpService } from "@nestjs/axios";
export declare class PokemonsService {
    private httpService;
    constructor(httpService: HttpService);
    getPokemons(): import("rxjs").Observable<any>;
    selectFewerProps(pokemon: any): {
        name: any;
    };
    getPokemon(pokemonId: string | number): import("rxjs").Observable<{
        name: any;
        id: any;
        base_experience: any;
        types: any;
        weight: any;
        stats: {
            hp: any;
            attack: any;
            defense: any;
            specialAttack: any;
            specialDefense: any;
            speed: any;
        };
    }>;
    getPokemonImg(pokemonId: number): import("rxjs").Observable<any>;
}
