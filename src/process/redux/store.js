import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import userReducer from '../reducers/userSlice';
import productReducer from '../reducer/products';
import apiMiddleware from '../middlewares';
// import productReducer from '../reducers/productSlice';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // user: products,
    product: productReducer,
  },
//   middleware: [sagaMiddleware, apiMiddleware], // A
middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware, apiMiddleware), // Add saga and API middleware
});

sagaMiddleware.run(rootSaga);

export default store;
