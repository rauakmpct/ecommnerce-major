import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { CategoryReducer } from './Reducer/CategoryReducer';
import { ProductReducer, ProductReducerDetail } from './Reducer/ProductReducer';
import { cartReducer } from './Reducer/CartReducer';
import { userRegistrationReducer } from './Reducer/UserReducer';


const reducer = combineReducers({
    cat: CategoryReducer,
    pro: ProductReducer,
    pdetail: ProductReducerDetail,
    cart: cartReducer,
    auth:userRegistrationReducer

})
let initializeState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems')) : [],
            shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
}

// const middleware = [thunk]

//createStore
const store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))
export default store;