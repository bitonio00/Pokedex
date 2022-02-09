import { PokemonsService } from './pokemon.service';
export declare class PokemonsController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonsService);
    getPokemons(): import("rxjs").Observable<any>;
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
}
