//constants

const ADD_RECORD="record/ADD_RECORD"

const GET_RECORDS ="record/GET_RECORDS"

const EDIT_RECORD = "record/EDIT_RECORD"

const REMOVE_RECORD = "record/REMOVE_RECORD"

//action creators

const addRecord=(payload)=>({
    type: ADD_RECORD,
    payload
})

const getRecords = (payload)=>({
    type: GET_RECORDS,
    payload
})

const editRecord = (payload) =>({
    type: EDIT_RECORD,
    payload
})

const removeRecord = (payload) =>({
    type: REMOVE_RECORD,
    payload
})

//thunks

export const obtainRecords = () =>async(dispatch) =>{
    const response = await fetch('/api/record/get-records')
    const data = await response.json()
    if(data.errors){
        return data;
    }
    dispatch(getRecords(data))

    return{}
}

export const updateRecord = (payload) =>async (dispatch) =>{
    const {props, title} = payload;

    const response = await fetch(`/api/record/edit-record/${payload.props.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title})
    })

    const data=await response.json()
    // console.log(data, "THIS IS MY UPDATED DATA!!!!!!!")
    if(data.errors){
        return data
    }

    dispatch(editRecord(data))
}

export const makeRecord = (payload) => async (dispatch)=>{
    const {title} = payload

    const response = await fetch('/api/record/new', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title
        })
    })

    const data=await response.json();

    if (data.errors) {
        return data
    }
    dispatch(addRecord(data))
}

export const deleteRecord = (payload)=> async (dispatch)=>{
    const response = await fetch(`/api/record/${payload.id}`, {
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

    dispatch(removeRecord(data))
}

const initialState = {records: {}}

export default function reducer(state = initialState, action){
    let newState;
    switch(action.type){
        case ADD_RECORD:
            newState={...state}
            newState.records[action.payload.id]=action.payload
            return newState;
        case GET_RECORDS:
            newState={...state}
            action.payload.records.forEach((record)=>{
                newState.records[record.id] = record
            })
            return newState
        case EDIT_RECORD:
            newState={...state}
            newState.records[action.payload.id] = action.payload
            return newState
        case REMOVE_RECORD:
            newState={...state}
            delete newState.records[action.payload['id of record to be deleted']]
            return newState
        default:
            return state;
    }
}
