// import { dispatch } from "react";
// import { dispatch } from '../pages/ColorPicker';

export const getLocalData = () => {
    let list = localStorage.getItem("color-list");
    if(list){
        let colorList = localStorage.getItem("color-list");
        return JSON.parse(colorList);
        
    }
    else {
        return [];
    }
};

export const saveColor = (color) =>{
    let newEntry = getLocalData();
    if(newEntry.length >= 10) {
        return -1;
    }
    let newSave = [...newEntry,color];
    console.log(newEntry);
    localStorage.setItem("color-list",JSON.stringify(newSave))
}

export const clearStorage = ()=>{
    console.log('wtf');
    let newInitialSave = []
    // localStorage.setItem('color-list',JSON.stringify(newInitialSave))
    localStorage.removeItem("color-list")
}

export const updateColorList = (colorList) =>{
try{
    let OverRider = colorList; // expected to be array
        if(!OverRider){
            localStorage.setItem("color-list",JSON.stringify([]))
            }
        else{
            localStorage.setItem("color-list",JSON.stringify(OverRider))// overriding 
        }
}
catch{
    throw new Error('Invilid Color list')
}
    }
    