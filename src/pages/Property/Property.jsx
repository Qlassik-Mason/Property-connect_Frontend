import React from 'react'
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getProperty } from '../../utils/api';
import { PuffLoader } from 'react-spinners';
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai';
import './Property.css';

import { MdMeetingRoom } from 'react-icons/md';
import {FaShower} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";
import Map from '../../components/Map/Map';

const Property =() =>{
    const {pathname} = useLocation(); 
    const id = pathname.split("/").slice(-1)[0];
    
      const {data, isLoading, isError}= useQuery(["resd", id], ()=>getProperty(id));
         
      //console.log(data.title)

      if(isLoading){
        return(
            <div className="wrapper">
                <div className ="flexCenter paddings">
                    <PuffLoader/>
                </div>




            </div>
        )
      }

      if(isError){
        return(
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )
      }
      

     
     return (
        <div className="wrapper">
            <div className="flexColStart paddings innerWidth property-container">
                {/* like button*/}
                <div className="like">
                   <AiFillHeart size={24} color="white"/>
                </div>


                {/* image */}
                <img src={data?.image} alt= "home image"/> 


                <div className="flexCenter property-details">



                    {/* left*/}
                    <div className="flexColStart left">
                       
                        {/* head */}

                        <div className="flexStart head">
                            <span className='primaryText'>{data?.title}</span>
                            <span className='orangeText' style={{fontSize:'1.5rem'}}>$ {data?.price}</span>
                        </div>

                        {/* Property type bathrooms*/}
                      <div className='flexStart properties-type'>
                        <div className='flexStart property-type'> 
                            <FaShower size={20}color="#1F3E72"/>
                            <span>{data?.property_type?.bathrooms}Bathrooms</span>

                        </div>
                      {/* Property type Parking*/}
                        <div className='flexStart property-type'>
                            <AiTwotoneCar size={20} color="#1F3E72"/>
                            <span>{data?.property_type?.parkings}Parking</span>

                        </div>
                        {/* Property type bedrooms*/}
                        <div className='flexStart property-type'>
                            <MdMeetingRoom size={20} color="#1F3E72"/>
                            <span>{data?.property_type?.bedrooms} Room</span>
                        </div>
                      </div>
                        
                        {/*description*/}
                        <span className='secondaryText' style={{textAlign:'justify'}}>{data.description}</span>

                        {/*address*/}
                        <div className='flexStart' style={{gap:"1rem"}}>
                            <MdLocationPin size={25}/>
                            <span className="secondaryText">
                                {
                                    data?.address
                                }
                                {
                                    data?.city
                                }
                                {
                                    data?.country
                                }
                            </span>
                        </div>
                         
                       
                        {/* booking button*/}
                        <button className='button'>
                            book your visit
                        </button>

                    </div>
                     
                     {/* right side*/}
                     <div className="map">
                      <div>map Section</div>
                    </div>


                       



                </div>
            </div>



        </div>
    )

}


export default Property;