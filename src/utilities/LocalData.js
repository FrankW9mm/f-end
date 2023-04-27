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

const checkcolor =(color)=>{
    let temp_color = getLocalData();
    if(temp_color.includes(color)){
        return true;
    }
    else{
        return false
    }
}

export const saveColor = (color) =>{
    let newEntry = getLocalData();
    let Duplicatechecker = checkcolor(color);
    if(newEntry.length >= 10) {
        return 'FULL';
    }
    if(Duplicatechecker){
        return'DUPLICATED'
        // console.log('already saved');
    }
    else{
        let newSave = [...newEntry,color];
        console.log(newEntry);
    localStorage.setItem("color-list",JSON.stringify(newSave))
    }
}

export const clearStorage = ()=>{
    console.log('wtf');
    let newInitialSave = []
    // localStorage.setItem('color-list',JSON.stringify(newInitialSave))
    localStorage.removeItem("color-list")
}

export const removeSingledata = ( color )=>{
    let NewColorList = getLocalData().filter( preColor=> preColor !== color)
    localStorage.setItem("color-list",JSON.stringify(NewColorList))
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
    