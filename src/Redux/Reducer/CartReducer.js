import {
    ADD_TO_CART, REMOVE_CART_ITEM,SAVE_SHIPPING_INFO,
} from '../Constants/CartConstant'

export const cartReducer = (state = { cartItems: [] }, action) => {
    // console.log(action.type);
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload
            const isItemExixsts = state.cartItems.find(
                (i) => i.product === item.product
            );
            if (isItemExixsts) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product === item.product ? item : i)
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload)
            }
            case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
        default:
            return state
    }
}