const datainfo = {
    data:null,
    cartData:[]
}

const DataStore = (state=datainfo, action)=>{
    switch(action.type){
        case "Adduser":{
            return{
                ...state,
                data:action.payload.data
            }
        }
        case "addCart":{
            return{
                ...state,
                cartData:action.payload.data
            }
        }
        case "delItem" :{
            return{
                ...state,
                cartData:action.payload.data
            }
        }
        default:{
            return state
        }
    }
}
export default DataStore