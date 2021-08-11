import React,{useEffect,useState} from 'react'
import axios from "axios";
import Character from '../Characters/Character';
import Header from '../Header';
import Search from '../Search';
function Homepage() {
    const [items,setItems]=useState(null);
    const[isLoading,SetIsLoading]=useState(true);
    const[query,setQuery]=useState(' ')
   
    useEffect(() => {
       async function getData()
       {
           const res=await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
           setItems(res.data);
           SetIsLoading(false)
       }
       getData();
    },[query])
       
    return (
        <div className="container">
            <Header />
            <Search getQuery={(q)=>setQuery(q)} />
            <Character isLoading={isLoading} items={items} />
        </div>
    )
}

export default Homepage
