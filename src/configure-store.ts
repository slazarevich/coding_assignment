import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ApplicationState, createRootReducer } from "./store";

export default function configureStore(
    initialState: ApplicationState
): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({
        trace: true,
        traceLimit: 25
    });

    const store = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers()
    );

    return store as any;
}
