import { FILE_DATA, GET_FILE_DATA, SET_STOCK_SAGA } from "../Store/Types"

const initialState = {
    fileData: "", stockData: ""
}
const reducerfunctions = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_FILE_DATA: {
            return {
                ...state, fileData: payload
            }
        }
        case FILE_DATA: {
            return {
                ...state, stockData: payload
            }
        }
        case SET_STOCK_SAGA: {
            return { ...state, stockData: payload }
        }
        default: {
            return state
        }
    }
}

export default reducerfunctions