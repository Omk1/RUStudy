import {uid} from "uid";
import {db} from './firebase';
import {set, ref} from "firebase/database"

export const writeToDatabase = (title,time,loc,sub,setTitle,setTime,setLoc,setSub) => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title,
      time,
      loc,
      sub,
      uuid,
    }).then(() => {
      setTitle("");
      setTime("");
      setLoc("");
      setSub("Mathematics");
    }).catch((error) => {
        console.error("Error writing to Firebase:", error);
    });
}

export const handleToChange = (e, setGroup) => {
    setGroup(e.target.value);
}

