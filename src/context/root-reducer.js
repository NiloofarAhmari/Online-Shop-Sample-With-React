import * as actionTypes from './action-types'

export const rootReducer = (state, action) => {
  console.log(action)
  console.log(state);
  switch (action.type) {
    case actionTypes.CHANGE_MESSAGE_FC:
      return {
        ...state,
        test: 'Message changed in fucntion component'
      }
    case actionTypes.CHANGE_MESSAGE_BY_PARAM_FC:
      return {
        ...state,
        test: action.payload
      }

    case actionTypes.USER_ADD_TO_LIST:
      const newProducts = [...state.products]
      // const newNum = [...state.num]
      // const existProduct = newProducts.find(action.payload ==action.payload);
      // console.log(existProduct);
      // if (!existProduct) 
      newProducts.push(action.payload)
      // newNum.push(1)
      return {
        ...state,
        products: newProducts,
        // num: newNum
      }
    case actionTypes.INCREAMENT:
      const lastNum = action.payload
      // const lastNum = [...state.num]
      // const lastNum = [...state.num[action.payload]]
      return {
        ...state,
        num: lastNum +1
      }


      case actionTypes.PRODUCT_DETAIL:
        return {
          ...state,
          product: action.payload
        }
        case actionTypes.REMOVE_PRODUCT:
          const id = action.payload
          const filteredProduct = [...state.products].filter((product) => product.id !== id)
          return {
           
            products: filteredProduct
          }
    default:
      return state
  }
}