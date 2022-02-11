import { Controller,Post, Body, Get, Param } from "@nestjs/common";
import {PokemonsService} from './pokemon.service';

@Controller('pokemons')
export class PokemonsController {

    constructor(private readonly pokemonService: PokemonsService){

    }

    @Get()
    getPokemons() {
       
            return this.pokemonService.getPokemons()
        

        
    }

    @Get(':id')
    getPokemon(@Param('id') pokemonId: string | number,) {
        return  this.pokemonService.getPokemon(pokemonId)
       
    }
    @Get('/image/:id')
     getPokemonImg(@Param('id') pokemonId:number){
        return  this.pokemonService.getPokemonImg(pokemonId)
    }


}