import { put } from 'redux-saga/effects';
import { fetchData } from '../../api/axiosInstance';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFail } from '../../reducer/products';

function* fetchPokemonProductsSaga() {
  // Trigger the API call
  yield put({
    type: 'Api/API_CALL', // API middleware action type
    actions: {
      success: { type: fetchProductsSuccess.type }, // On success
      fail: { type: fetchProductsFail.type }, // On failure
    },
    promise: fetchData('pokemon'), // API call for Pokémon products
  });
}

export default fetchPokemonProductsSaga;
