const initState = {
    country:"India",
    name:"Government Representive",
    disableAnno: true,
    disablePredict:false
}

export const userReducer = (state=initState,action) => {
    let type = action.type;
    switch(type) {
        case "setName":
            let nameState = {
                ...state,'name':action.payload
            }
            return nameState;
        case "setCountry":
            let newstate = {
                ...state,'country':action.payload
            }
            return newstate;
        case "disableAnno":
            let stt = {
                ...state,'disableAnno':action.payload
            }
            return stt;
        case "disablePredict":
            let st = {
                ...state,'disablePredict':action.payload
            }
            return st;
    }
    return state;
}


