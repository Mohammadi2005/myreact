export const initialState = {
    fact : "",
    loading: false,
    error: false,
}

// fetch_start      : loading :true

// fetch_success    : loading : false
//                  : fact : res.data

// fetch_error      : error : true
//                  : loading : false

export const handleState = (state = initialState, action) => {
    switch (action.type) {
        case "fetch_start":
            return {...state ,loading: true, error: false, fact: "" }
        case "fetch_success":
            return {...state, loading: false, fact : action.fact, error: false}
        case "fetch_error":
            return {...state, loading: false, error: true , fact: "" }
        default:
            return {...state}
    }
}

