import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"
import { onValue, useEffect, useState } from 'react';

export const updatePage = (bros, setBros, bro) => {
    onValue(ref(db), snapshot =>{
        setBros([]);
        const data = snapshot.val();
        if(data !== null){
        Object.values(data).map((bro) =>{
            setBros(oldArray => [...oldArray, bro])
        });
        }
    });
}