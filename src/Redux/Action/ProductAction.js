import axios from 'axios'
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../Constants/ProductConstant'

// Action Create
export const getAllProduct = () => async (dispatch) => {
    try {
        dispatch({type:ALL_PRODUCT_REQUEST})
        let apilink ='https://apiecommerce-qpji.onrender.com/api/getallproduct'
        // let apilink='http://localhost:4000/api/getallproduct'
        const {data} = await axios.get(apilink)
        // console.log(data)
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })
    } catch(error){
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message

        })
    }
}

export const getAllProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        let apilink =`https://apiecommerce-qpji.onrender.com/api/getallproductdetail/${id}`
        // let apilink='http://localhost:4000/api/getallproductdetail'
        const {data} = await axios.get(apilink)
        // console.log(data)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data,
        })
    } catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message

        })
    }
}