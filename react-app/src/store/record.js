//constants

const ADD_RECORD="record/ADD_RECORD"

//action creators

const addRecord=(payload)=>({
    type: ADD_RECORD,
    payload
})

//thunks

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
    console.log(data, "THIS IS THE RECORD I JUST MADE WEEHEE")
    if (data.errors) {
        return data
    }
    dispatch(addRecord(data))
}
