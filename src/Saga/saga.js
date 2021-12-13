import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects";
import { setFileData } from "../Redux/Action/Action_File"
import { GET_FILE_DATA } from "../Redux/Store/Types"

function getApi() {
    return fetch("https://5fb24a7687ed490016ea8b5f.mockapi.io/api/vi/getData", {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((e) => e);
  }
  
  function* getStockData(action) {
    try {
      const stock = yield call(getApi);
      console.log("data GET_STOCK_DATA", stock);
      yield put(setFileData(stock));
    } catch (err) {
      console.log(err);
    }
  }

export function* waitforgetFileData() {
    yield takeEvery(GET_FILE_DATA, getStockData)
}