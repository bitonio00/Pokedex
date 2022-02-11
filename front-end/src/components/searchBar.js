import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './searchBar.css'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import PokemonCard from './pokemonCard';

function SearchBar(data){

    const [filteredData, setFilteredData] = useState([])
    const [currentSearch, setCurrentSearch] = useState('')
    const [pokemonName,setPokemonName]=useState('')
    
    
     const  onClick= (name)=>{
      
        setPokemonName(name)
       
}
    const clearInput=()=>{
        setFilteredData([])
        setCurrentSearch('')
    }

    const handleFilter= (event)=>{
        
        const searchWord= event.target.value
        setCurrentSearch(searchWord)
        const newFilter=data.data.filter((value)=>{
            return value.name.includes(searchWord.toLowerCase())
        })
        if( searchWord ==="")
            setFilteredData([])
        else
            setFilteredData(newFilter)
    }
    return(
        <div className='search'>
            <div className='searchInputs'>
                <input type='text'placeholder='Enter a Pokemon Name...'  value={currentSearch} onChange={handleFilter}/ >
                <div className='searchIcon'>
                    {filteredData.length===0 ? <SearchIcon />: <CloseIcon id='clearBtn' onClick={clearInput}/>}
                    
                </div>
            </div>
            { filteredData.length !==0 && (
            <div className='dataResult'>
               { filteredData.slice(0,10).map((value,key)=>{
                   return (
                    <div key={value.name}>
                   <a className='dataItem' onClick={() => onClick(value.name)}> 
                   <p>{value.name}</p>
                   </a>
                   </div>)
               })}
            </div>
            )}
            {pokemonName !==''?
            <div>
               <PokemonCard name={pokemonName}/>
            </div>:
            <span></span>}
        </div>
    )
}

export default SearchBar