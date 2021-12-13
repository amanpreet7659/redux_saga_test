import { applyMiddleware, compose, createStore } from "redux"
import rootsaga from "../../Saga"
import rootReducer from '../Reducer/index'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()
// const Store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleWare)))
const Store = compose(
    applyMiddleware(sagaMiddleWare)
)(createStore)(rootReducer);

sagaMiddleWare.run(rootsaga);

export default Store