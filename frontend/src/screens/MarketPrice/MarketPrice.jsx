import axios from 'axios'
 
import React, { useEffect, useState } from 'react'



 
import "@reach/combobox/styles.css";
import {
    Container,
    Table,
    Row,
    CardDeck,
    Card,
    Button
} from 'react-bootstrap';
 


import { LinkContainer } from 'react-router-bootstrap'
import Meta from '../../components/Helmet/Meta';
import './FarmerStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCropDetails} from './../../actions/marketPriceActions.js'



const MarketPrice = ()  => {
 
    const[province, setProvince] = useState('Province 1')
    const {marketPrice} = useSelector(state => state.marketPrice)
    console.log(marketPrice,'market');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCropDetails())

    }, [dispatch ])


 


    return (
        <div>
            <Meta
                title="बारी | Market Price"
            />
            <Container className='farmerContainer'>
                <h1 className='title'>Market Price of Crops in Nepal </h1>
                <h4 className="farmer-title">Here You can learn about the latest price of crops in context of Nepal.</h4>
                <div className='container  p-5'>
                
                <select Classname="custom select" onChange={(e) => setProvince(e.currentTarget.value)}>

 
                
        
        
                    <option value="Province 1" >Province 1</option>
                    <option value="Bagmati" > Bagmati </option>
                    <option value="Madesh" > Madesh </option>
                    <option value="Gandaki" > Gandaki </option>
                    <option value="Lumbini" > Lumbini </option>
                    <option value="Karnali" > Karnali </option>
 
                    <option value="Sudarpaschim" > Sudarpaschim </option>
                    </select>
 
                    </div>

                
             
                <Table style={{marginBottom: '223px'}} striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <td>Crop Name</td>
 
                                        <td>Initial Price(Rs.)</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {marketPrice
                                    .filter(( item ) =>
                                        item.province == province
                                    )
                                    .map((crop) => (
                                        <tr key={crop._id}>
                                            <td>{crop.cropName}</td>
                                            <td>{crop.price}</td>
                                        </tr>
  ))}
                                

                               
 
                                </tbody>
                            </Table>
            </Container>
        </div>
    )
}

export default MarketPrice
