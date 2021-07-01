//constants

const ADD_ENTRY = "entry/ADD_ENTRY"

//action creators

const addEntry = (payload) =>({
    type: ADD_ENTRY,
    payload
})

//thunks

export const makeEntry = (payload) => async(dispatch) =>{
    const {title, content} = payload

    const response = await fetch ('/api/entry/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content
        })
    })

    const data=await response.json();
    console.log(data, "THIS IS THE DATA")
    if(data.errors){
        return data
    }

    dispatch(addEntry(data))
}

//reducer

const initialState = {entries: null}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case ADD_ENTRY:
            newState = {...state}
            newState.entries = action.payload
            return newState
        default:
            return state;
    }
}
