import {ADD_REMINDER ,CLEAR_REMINDER} from '../types';
import {REMOVE_REMINDER}from '../types';

export const add_Reminder=(text,date )=>{
   const action={
        type:ADD_REMINDER,
        text,
        date
    }
  
    return action

}

export const remove_Reminder=(id)=>{
    const action={
        type:REMOVE_REMINDER,
        id

    }
    return action
}

export const clear_Reminder=(id)=>{
    const action={
        type:CLEAR_REMINDER,
        

    }
    return action
}
