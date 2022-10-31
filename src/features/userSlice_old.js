import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

const userSlice = createSlice({
    name: 'userDetails',
    initialState:[{
        emailId:"teste",
        firstName : "test",
        gender : "male",
        id : 1.3758685503229908,
        lastName: "test",
        mobileNo:"test",
        userName:  "test"
    }],
    reducers:{
        dataAdd : (state, action) => {
            console.log(action)           
            state.push(action.payload)           
        },

        dataEdit : (state, action) => {
            const oldusers = [...state]
               const id = action.payload.id       
               oldusers.map((item) => (item.id === id)?[        
                    item.firstName=action.payload.firstName,
                    item.lastName=action.payload.lastName,
                    item.userName=action.payload.userName,
                    item.emailId=action.payload.emailId,
                    item.gender=action.payload.gender,
                    item.mobileNo=action.payload.mobileNo
               ]:oldusers) 
        },

        dataDelete: (state, action) => {
                        
            return state.filter((item) =>(item.id !== action.payload))
            
          }
    }
})


export const {dataAdd, dataEdit, dataDelete} = userSlice.actions
export default userSlice.reducer;