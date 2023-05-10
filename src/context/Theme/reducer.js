export const initialState = {

    dark: localStorage.getItem("user-theme") === "true",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "setMode": {
            localStorage.setItem("user-theme", action.payload);
            return {
                dark: action.payload,
            };
        }
        default:
            return state;
    }
};