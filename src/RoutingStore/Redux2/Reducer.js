const initialState = {
    products: [],
  };
  const ShoppinReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case 'ADD_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, quantity: product.quantity + 1}
              : product,
          ),
        };
      case 'SUB_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {
                  ...product,
                  quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                }
              : product,
          ),
        };
     
      default:
        return state;
    }
  };
  export {ShoppinReducer};
  