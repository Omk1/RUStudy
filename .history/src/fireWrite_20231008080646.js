import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"

export const writeToDatabase = (titleVal, timeVal, locVal, tagVal, setTitle, setTime, setLoc, setTag) => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title: titleVal, 
      time: timeVal, 
      loc: locVal,
      tag: tagVal,
      uuid,
    });

    setTitle(""); setTime(""); setLoc(""); setTag("");
}

