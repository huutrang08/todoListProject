import type from './workActionType'
export const setDate = (data)=>{
 return{
     type:type.SET,
     data:data
 }
}
export const setWorkDateData = (data)=>{
    return{
        type:type.SET_DATA,
        data:data
    }
   }
   export const refresh = (data)=>{
    return{
        type:type.REFRESH,
        data:data
    }
   }