import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"

export const writeToDatabase = (title, time, loc, setTitle, setTime, setLoc) => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title: title,
      time: time,
      loc: loc,
      uuid,
    });

    setTitle = ""; setTime = ""; setLoc = "";
}

export const handleToChange = (e, setBro) => {
    setBro(e.target.value);
}

