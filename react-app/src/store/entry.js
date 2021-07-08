//constants

const ADD_ENTRY = "entry/ADD_ENTRY"

const GET_ENTRIES = "entry/GET_ENTRIES"

const EDIT_ENTRY = "entry/EDIT_ENTRY"

const REMOVE_ENTRY = "entry/REMOVE_ENTRY"

//action creators

const addEntry = (payload) =>({
    type: ADD_ENTRY,
    payload
})

const getEntries = (payload) => ({
    type: GET_ENTRIES,
    payload
})

const editEntry = (payload) => ({
    type: EDIT_ENTRY,
    payload
})

const removeEntry= (payload) => ({
    type: REMOVE_ENTRY,
    payload
})

//thunks

export const obtainEntries = () =>async(dispatch) =>{
    const response = await fetch('/api/entry/get-entries')
    const data = await response.json()
    if (data.errors){
        return data;
    }
    dispatch(getEntries(data))
    return{}
}

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
    if(data.errors){
        return data
    }

    dispatch(addEntry(data))
}

export const updateEntry =(payload)=>async (dispatch) => {
    const response = await fetch (`/api/entry/edit-entry/${payload.id}`,{
        method: "PATCH",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    const data=await response.json()
    if(data.errors){
        return data
    }
    dispatch(editEntry(data))
}

export const deleteEntry =(payload) =>async(dispatch)=>{
    const response = await fetch(`/api/entry/${payload.id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    if(data.errors){
        return data
    }
    console.log(data, "THIS IS MY DATAAAAAAAAA")
    dispatch(removeEntry(data))
}

//reducer

const initialState = {entries: {}}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case ADD_ENTRY:
            newState = {...state}
            newState.entries[action.payload.id] = action.payload
            return newState;
        case GET_ENTRIES:
            newState={...state}
            action.payload.entries.forEach((entry) => {
                newState.entries[entry.id] = entry
            })
            return newState
        case EDIT_ENTRY:
            newState={...state}
            newState.entries[action.payload.id] = action.payload
            return newState
        case REMOVE_ENTRY:
            newState={...state}
            delete newState.entries[action.payload.id]
            return newState
        default:
            return state;
    }
}
