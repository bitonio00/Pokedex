import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Buffer } from "buffer"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import './pokemonCard.css'



function PokemonCard(pokemon){
    const [pokemonImage,setPokemonImage]=useState("")
    const [pokemonId,setPokemonId]=useState(0)
    const [pokemonBaseExp,setPokemonBaseExp]=useState(0)
    const [pokemonTypes,setPokemonTypes]=useState([])
    const [pokemonStats,setPokemonStats]=useState([])
    const [pokemonWeight,setPokemonWeight]=useState(0)
    const [pokemonName,setPokemonName]=useState('')
   

   
  useEffect( () => {

    const fetch = async () => {
     
        
      /*if(pokemon)
      {
        const resp= await axios.get(`http://localhost:3333/pokemons/image/${pokemon[1]}`)
        if(resp.data){
          console.log(resp)
          let base64ImageString = Buffer.from(resp.data, 'binary').toString('base64')
          let srcValue = "data:image/png;base64,"+base64ImageString
          setImage(srcValue)
          console.log(base64ImageString)
      
        }
      }*/
      const resp= await axios.get(`http://localhost:3333/pokemons/${pokemon.name}`)  
        if(resp.data){
            let image=`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${resp.data.id}.png?raw=true`
            setPokemonImage(image)
            setPokemonName(resp.data.name)
            setPokemonId(resp.data.id)
            setPokemonBaseExp(resp.data.base_experience)
            setPokemonTypes(resp.data.types)
            setPokemonStats(resp.data.stats)
            setPokemonWeight(resp.data.weight)
            
           
    }
      
    }
      fetch()    
 },[pokemon])
    return(
        <div >
            <Card sx={{ maxWidth: 400 }} className="card">
                <CardHeader 
                title={pokemonName.toUpperCase()}
                subheader={'Id: '+pokemonId + 'Types:'+pokemonTypes+'Base_experience:'+pokemonBaseExp} />
                <CardContent>
        <Typography variant="body2" color='blue'>
          {'STATS: HP='+pokemonStats.hp+' ATTACK='+pokemonStats.attack+' DEFENSE='+pokemonStats.defense+
          ' SPECIAL_ATTACK='+pokemonStats.specialAttack+' SPECIAL_DEFENSE='+pokemonStats.specialDefense}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="300"
        image={pokemonImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color='blue'>
         {'WEIGHT='+pokemonWeight}
        </Typography>
      </CardContent>
            </Card>
        </div>
       
    )
}

export default PokemonCard
