import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import CharacterDetails from './CharacterDetails/CharacterDetails';
function Page () {
    const {id}=useParams();
    const[details,setDetails]=useState();
    const[isLoading,SetIsLoading]=useState(true);
    useEffect(() => {
            async function getDetails()
            {
                const res=await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
                console.log(res.data[0]);
                setDetails(res.data[0]);
                SetIsLoading(false);
            }
            getDetails();
     },[id])
    return (
        <div>
           <CharacterDetails isLoading={isLoading} details={details} />
        </div>
    )
}

export default Page;
