import { FILE_DATA, GET_FILE_DATA, SET_FILE_DATA, SET_STOCK_DATA } from "../Store/Types"

export const getFileData = () => {
    return { type: GET_FILE_DATA }
}

export const setFileData = (data) => {
    return {
        type: FILE_DATA,
        payload: data
    }
}

export const setUserData = (user) => {
    return {
        type: SET_FILE_DATA, payload: user
    }
}