export const addUser=(data)=>{
    return{
        type:'SET',
        data:data
    }
}
export const deleUser=()=>{
    return{
        type:'DELE',
    }
}