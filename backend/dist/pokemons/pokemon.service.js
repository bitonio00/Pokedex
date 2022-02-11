"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const operators_2 = require("rxjs/operators");
let PokemonsService = class PokemonsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getPokemons() {
        return this.httpService
            .get('https://pokeapi.co/api/v2/pokemon?limit=889')
            .pipe((0, operators_1.map)((reponse) => reponse.data.results.map(this.selectFewerProps)), (0, operators_2.catchError)(e => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
    selectFewerProps(pokemon) {
        const { name } = pokemon;
        return { name };
    }
    getPokemon(pokemonId) {
        return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .pipe((0, operators_1.map)((reponse) => reponse.data), (0, operators_1.map)((data) => ({
            name: data.name,
            id: data.id,
            base_experience: data.base_experience,
            types: data.types[1] ? [data.types[0].type.name, data.types[1].type.name] : data.types[0].type.name,
            weight: data.weight,
            stats: {
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
            }
        })), (0, operators_2.catchError)(e => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
    getPokemonImg(pokemonId) {
        return this.httpService.get(`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`).pipe((0, operators_1.map)((response) => response.data), (0, operators_2.catchError)(e => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
};
PokemonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PokemonsService);
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemon.service.js.map