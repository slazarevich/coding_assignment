import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import RootLayout from "./RootLayout";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createRootReducer, rootSaga } from "./store";
import "./App.css";

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <RootLayout />
        </Provider>
    );
};

export default App;
