import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
} from '../Constants/CategoryConstant'
import axios from 'axios'

// Action  Create
export const getAllCategory = () => async (dispatch) => {
    try {
        dispatch({type:ALL_CATEGORY_REQUEST})
        let apilink = 'https://apiecommerce-qpji.onrender.com/api/categorydisplay'
        // let apilink='http://localhost:4000/api/categorydisplay'
        const {data} = await axios.get(apilink)
        // console.log(data)
        dispatch({
            type:ALL_CATEGORY_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type:ALL_CATEGORY_FAIL,
            payload:error.response.data.message
    
        })
    }
    }