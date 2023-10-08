import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"

export const writeToDatabase = (broValue, setBro) => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      bro: broValue,
      uuid,
    });

    setBro("");
}

export const handleToChange = (e, setBro) => {
    setBro(e.target.value);
}

