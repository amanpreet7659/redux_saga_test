// root saga
import { all } from "redux-saga/effects";
import { waitforgetFileData } from "./saga";
import { waitforgetStockData } from "./stockSaga";

export default function* rootsaga() {
    yield all([waitforgetFileData(), waitforgetStockData()])
}