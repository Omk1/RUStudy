import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"
import { useState, useEffect } from 'react';
import {bro, setBro} from './App'



const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      bro,
      uuid,
    });

    setBro("");
  }