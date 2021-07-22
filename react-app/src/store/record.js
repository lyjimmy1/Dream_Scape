//constants

const ADD_RECORD="record/ADD_RECORD"

const GET_RECORDS ="record/GET_RECORDS"



//action creators

const addRecord=(payload)=>({
    type: ADD_RECORD,
    payload
})

const getRecords = (payload)=>({
    type: GET_RECORDS,
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
        default:
            return state;
    }
}
