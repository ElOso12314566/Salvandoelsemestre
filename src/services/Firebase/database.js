import {getFirestore} from "firebase/firestore";

import conexion from "./index";

const db = getFirestore(conexion);

export default db;