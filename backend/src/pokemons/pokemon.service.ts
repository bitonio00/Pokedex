import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { response } from "express";
import { type } from "os";
import { map } from 'rxjs/operators';
import {Pokemon} from './pokemon.model';
import { catchError } from 'rxjs/operators';

interface isPokemon{
  name:string,
  id:number,
  base_expericence: number,
  types:any,
  weight:number,
  stats:any,
  image:any,

}

@Injectable()
export class PokemonsService {

    constructor(private httpService: HttpService) {}

      getPokemons  (){
          return this.httpService
          .get('https://pokeapi.co/api/v2/pokemon?limit=151')
          .pipe(
          map((reponse)=> reponse.data)      
          )
    }

    getPokemon (pokemonId: string | number){
      return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .pipe(
        map((reponse)=> reponse.data) ,    
        map((data)=>({
            name:data.name,
            id: data.id,
            base_experience: data.base_experience,
            types: data.types[1]?[data.types[0].type.name,data.types[1].type.name]:data.types[0].type.name,
            weight: data.weight,
            stats:{
              hp: data.stats[0].base_stat,
              attack: data.stats[1].base_stat,
              defense: data.stats[2].base_stat,
              specialAttack: data.stats[3].base_stat,
              specialDefense: data.stats[4].base_stat,
              speed: data.stats[5].base_stat,
            },
            //image:this.getPokemonImg(data.id),
 
        })),
        catchError(e => {
          throw new HttpException(e.response.data, e.response.status);
        }),
        )
    }

    /*getPokemonImg(pokemonId:any){
      
      return this.httpService.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`)
      .pipe(
        map((reponse)=> reponse.data) 
      )
    }*/
    

    

}



