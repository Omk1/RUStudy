import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"

export const writeToDatabase = (group, setGroup) => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title: group.title,
      time: group.time,
      loc: group.loc,
      uuid,
    });

    group = {};
}

export const handleToChange = (e, setGroup) => {
    setGroup.title(e.target.value);
}

