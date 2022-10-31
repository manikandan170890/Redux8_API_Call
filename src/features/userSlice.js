
//import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFetch, postFetch, putFetch, deleteFetch } from '../api'
const initialState = {
    loading: false,
    users: [],
    error: ''
  }

export const getFetchUsers = createAsyncThunk('user/fetchUsers', () => {    
   return getFetch()     
  })

export const postFetchUsers = createAsyncThunk('user/postUsers', (data) => {    
    return postFetch(data)     
   })

export const putFetchUsers = createAsyncThunk('user/putUsers', (data) => {    
    return putFetch(data)     
   })

  export const deleteFetchUsers = createAsyncThunk('user/deleteUsers', (id) => {    
    return deleteFetch(id)
   })

  
const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    extraReducers: builder => {
        builder
        //-------------------Get------------------------------------------
        .addCase(getFetchUsers.pending, state => {
          state.loading = true
        })
        .addCase(getFetchUsers.fulfilled, (state, action) => {
          //  console.log('acrtion',action)
          state.loading = false
          state.users = action.payload
          state.error = ''
        })
        .addCase(getFetchUsers.rejected, (state, action) => {
          state.loading = false
          state.users = []
          state.error = action.error.message
        })
        //-------------------Post------------------------------------------
        .addCase(postFetchUsers.pending, state => {
            state.loading = true
          })
          .addCase(postFetchUsers.fulfilled, (state, action) => {
            //  console.log('acrtion',action)
            state.loading = false
            state.users = action.payload
            state.error = ''
          })
          .addCase(postFetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
          })
          //-------------------Put------------------------------------------
        .addCase(putFetchUsers.pending, state => {
            state.loading = true
          })
          .addCase(putFetchUsers.fulfilled, (state, action) => {
            //  console.log('acrtion',action)
            state.loading = false
            state.users = action.payload
            state.error = ''
          })
          .addCase(putFetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
          })
        //-------------------Delete------------------------------------------
        .addCase(deleteFetchUsers.pending, state => {
            state.loading = true
          })
          .addCase(deleteFetchUsers.fulfilled, (state, action) => {
            //  console.log('acrtion',action)
            state.loading = false
            state.users = action.payload
            state.error = ''
          })
          .addCase(deleteFetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
          })
      }

     


    /*reducers:{

        dataList: (state, action) => {
            console.log(action)           
            state.push(action.payload)           
        },
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
    }*/
});



// export const {dataList, dataAdd, dataEdit, dataDelete} = userSlice.actions
export default userSlice.reducer;