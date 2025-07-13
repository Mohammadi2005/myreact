export const initialState = {
    title: "",
    description: "",
    price:0,
    category: "",
    quantity: 0
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "change_input":
            return {...state, [action.data.name]: action.data.value}
        case "increase":
            return {...state, quantity: state.quantity + 1}
        case "decrease":
            return {...state, quantity: state.quantity - 1}
        default:
            return state
    }
}