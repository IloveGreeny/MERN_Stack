import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {useContext} from "react";


export const UseAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("useAuthContext not working");
    }

    return context;
}