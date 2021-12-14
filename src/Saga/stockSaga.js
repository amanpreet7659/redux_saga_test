import { call, put, takeEvery } from 'redux-saga/effects';
import stockJSON from '../JSON/stock.json'
import { setStockFile } from '../Redux/Action/stockFile';
import { GET_STOCK_SAGA } from '../Redux/Store/Types';

// const getData = () => {
//     return stockJSON
// }
// console.log("stockJSON ", stockJSON);
function* getStockJSON() {
    try {
        yield put(setStockFile(stockJSON))
    } catch (error) {
        console.log(error);
    }
}

export function* waitforgetStockData() {
    yield takeEvery(GET_STOCK_SAGA, getStockJSON)
}