import axios from 'axios'

import { MARKET_PRICE_LIST_FAIL, MARKET_PRICE_LIST_REQUEST, MARKET_PRICE_LIST_SUCCESS } from '../constants/supplierConstant';

export const getCropDetails = (id) => async (dispatch, getState) => {

    try {
        console.log("inside details");
        dispatch({
            type: MARKET_PRICE_LIST_REQUEST,
        })

       

        const config = {
            headers: {
                'Content-type': 'application/json',
                
            },
        }

        const { data } = await axios.get(
            `/api/marketPrice/getCrop/`,
            config
        )
        console.log(data,"data");
        dispatch({
            type: MARKET_PRICE_LIST_SUCCESS,
            
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MARKET_PRICE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

