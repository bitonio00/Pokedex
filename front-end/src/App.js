import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBar from './components/searchBar';

function App() {
  const [pokemons, setPokemons]=useState()
  useEffect( () => {

    const fetch = async () => {
 
      
 
        const resp= await axios.get(`http://localhost:3333/pokemons`)
        
        if(resp.data)
          setPokemons(resp.data)
        
        
      
    }
    
      fetch()
    
 },[])



  return <div className="App">
    {pokemons?<SearchBar data={pokemons}/>:<span></span>}
  </div>
}
  


export default App;
