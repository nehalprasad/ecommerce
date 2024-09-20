import { all } from 'redux-saga/effects';
import fetchPokemonProductsSaga from './products'

export default function* rootSaga() {
  yield all([ fetchPokemonProductsSaga()]);
}
