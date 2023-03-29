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