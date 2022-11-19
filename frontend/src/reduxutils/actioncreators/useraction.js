//Actions will be written in beelow format

export const setCountry = (email) => {
    return (dispatch) => {
        dispatch({
            type:"setCountry",
            payload:email
        });
    } 
}

export const setName = (name) => {
    return (dispatch) => {
        dispatch({
            type:"setName",
            payload:name
        });
    } 
}

export const disableAnno = (name) => {
    return (dispatch) => {
        dispatch({
            type:"disableAnno",
            payload:name
        });
    } 
}

export const disablePredict = (name) => {
    return (dispatch) => {
        dispatch({
            type:"disablePredict",
            payload:name
        });
    } 
}