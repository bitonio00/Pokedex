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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsController = void 0;
const common_1 = require("@nestjs/common");
const pokemon_service_1 = require("./pokemon.service");
let PokemonsController = class PokemonsController {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    getPokemons() {
        return this.pokemonService.getPokemons();
    }
    getPokemon(pokemonId) {
        return this.pokemonService.getPokemon(pokemonId);
    }
    getPokemonImg(pokemonId) {
        return this.pokemonService.getPokemonImg(pokemonId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PokemonsController.prototype, "getPokemons", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PokemonsController.prototype, "getPokemon", null);
__decorate([
    (0, common_1.Get)('/image/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PokemonsController.prototype, "getPokemonImg", null);
PokemonsController = __decorate([
    (0, common_1.Controller)('pokemons'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonsService])
], PokemonsController);
exports.PokemonsController = PokemonsController;
//# sourceMappingURL=pokemon.controller.js.map