import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"
import { useState, useEffect } from 'react';

export const writeToDatabase = (titleVal, timeVal, locVal, setTitle, setTime, setLoc) => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title: titleVal, 
      time: timeVal, 
      loc: locVal,
      uuid,
    });

    setTitle(""); setTime(""); setLoc("");
}

