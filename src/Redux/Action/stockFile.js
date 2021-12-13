import { GET_STOCK_SAGA, SET_STOCK_SAGA } from "../Store/Types"

export const getStockFile = () => {
    return { type: GET_STOCK_SAGA }
}

export const setStockFile = (data) => {
    return { type: SET_STOCK_SAGA, payload: data }
}