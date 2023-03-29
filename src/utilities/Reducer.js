export const reducer =( state, action)=>{
    if( action.type === 'CHANGE_COMPELETE'){
        return{
            ...state,
            color:action.data, 
        }
    }

    if( action.type === 'COLOR_CHANGE'){
        return{
            ...state,
            color:action.data,
            hex:action.hex_data
        }
    }

    if( action.type ==='SAVE_FAIL'){
        return{
            ...state,
            showModal:action.data,
        }
    }

    if( action.type ==='SAVE_FAIL_OVER'){
        return{
            ...state,
            showModal:action.data,
        }
    }

    if( action.type ==='OPEN_SAVE'){
        return{
            ...state,
            showSave:action.data,
        }
    }

    if( action.type ==='CLOSE_SAVE'){
        return{
            ...state,
            showSave:action.data,
        }
    }
}




