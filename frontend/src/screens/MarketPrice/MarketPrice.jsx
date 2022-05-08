import axios from 'axios'
import React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
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



const MarketPrice = ()  => {
    const {data} = axios.get(`/api/marketprice`)
    console.log(data);


    return (
        <div>
            <Meta
                title="बारी | Market Price"
            />
            <Container className='farmerContainer'>
                <h1 className='title'>Market Price of Crops in Nepal </h1>
                <h4 className="farmer-title">Here You can learn about the latest price of crops in context of Nepal.</h4>
                <div className='container  p-5'>
                <select Classname="custom select">
                
        
        
                    <option value="Province 1" >Province 1</option>
                    <option value="Bagmati" > Bagmati </option>
                    <option value="Madesh" > Madesh </option>
                    <option value="Gandaki" > Gandaki </option>
                    <option value="Lumbini" > Lumbini </option>
                    <option value="Karnali" > Karnali </option>
                    <option value="Sudarpashchim" > Sudarpaschim </option>
                    </select>
                    </div>

                
             
                <Table style={{marginBottom: '223px'}} striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <td>Crop Name</td>
                                        <td>Initial Price</td>
                                    </tr>
                                </thead>
                                <tbody>
                               
                                </tbody>
                            </Table>
            </Container>
        </div>
    )
}

export default MarketPrice
