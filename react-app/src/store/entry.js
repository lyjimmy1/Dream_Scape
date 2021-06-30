//constants

const ADD_ENTRY = "entry/ADD_ENTRY"

//action creators

const addEntry = (payload) =>{
    type: ADD_ENTRY,
    payload
}

//thunks

export const makeEntry = () => async(dispatch) =>{
    const response = await fetch ('/api/entry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
        })
    })
}
