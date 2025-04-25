import React from'react'
import SearchBar from '../../components/searchBar/searchBar'
import './properties.css'
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import PropertyCard from '../../components/propertycard/PropertyCard'


const Properties = () => {
    
    const {data, isError, isLoading} =  useProperties()
       //console.log(data)
       if(isError){
        return(
            <div className='wrapper'>
                <span>Error while fetching data</span>
            </div>
        )
       }

       if(isLoading){
         
        return(
            <div className="wrapper flexCenter" style={{height:"60vh"}}>
                <PuffLoader
                height='88'
                width ='80' 
                radius ={1}
                color = '#4066ff'
                aria-label = 'puff-loading'/>
            </div>
        )
          
       }



    return(
        <div className='wrapper'>
            <div className="flexCalCenter paddings innerWidth properties-container">  
                <SearchBar/>

                <div className ='flexColCenter paddings innerWidth properties'>
                    {
                        data.map((card, i)=> (<PropertyCard card = {card} key={i}/>))
                    }


                </div>
            </div>
        </div>
    )


}

export default Properties;