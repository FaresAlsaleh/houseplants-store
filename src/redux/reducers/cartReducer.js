const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const addedItem = action.payload;
        const updatedItems = [...state.items, addedItem];
        const updatedTotalPrice = state.totalPrice + addedItem.price;
  
        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: updatedTotalPrice,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  