import React from "react";
import globalHook from "use-global-hook";

const initialState = {
    counter: 0,
    openDrawer: true,
    alertData: null,
};

const actions = {
    addToCounter: (store, amount) => {
        const newCounterValue = store.state.counter + amount;
        store.setState({ counter: newCounterValue });
    },
    setOpenDrawer(store, openDrawer) {
        store.setState({ openDrawer });
    },
    openAlert(store, alertData) {
        store.setState({
            alertData: {
                ...alertData,
                open: true,
            },
        });
    },
    closeAlert(store) {
        store.setState({ alertData: null });
    },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;

// Example
// const App = () => {
//     const [globalState, globalActions] = useGlobal();
//     return (
//         <div>
//             <p>
//                 counter:
//                 {globalState.counter}
//             </p>
//             <button type="button" onClick={() => globalActions.addToCounter(1)}>
//                 +1 to global
//             </button>
//         </div>
//     );
// };
