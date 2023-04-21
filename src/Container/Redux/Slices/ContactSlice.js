import { createSlice } from '@reduxjs/toolkit'

const initialState={
    contactData:[],
    token:'',
    reminderModalData:[],
    returnModalData:{},
    formData:[],
    sidebarData:[],
    categoryName:{}
}   

export const ContactSlice=createSlice({
    name:'contact',
    initialState,
     
    reducers:{
        addContact:(state, action)=>{
          state.contactData=action.payload;
        },

        setToken:(state, action)=>{
          state.token= action.payload
        },

        addReminderArray:(state, action)=>{
          state.reminderModalData= action.payload;
        },

        getReturnReminderData:(state, action)=>{
           state.returnModalData= action.payload;
        },

        clearReturnModalData:(state)=>{
           state.returnModalData={}
        },

        getFormData:(state, action)=>{
           state.formData=[action.payload ]
        },

        getSidebarData:(state,action)=>{
          state.sidebarData= action.payload
        },

        getCategoryName:(state, action)=>{
          state.categoryName= action.payload
        }

        // setRoute:(state, action)=>{
        //     state.flag=!state.flag;
        // }
    }

});


export const {addContact, setToken,addReminderArray, getReturnReminderData, clearReturnModalData, getFormData, getSidebarData, getCategoryName} = ContactSlice.actions;

export default ContactSlice.reducer;