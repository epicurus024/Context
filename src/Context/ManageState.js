import React, {  useState } from "react";

import context from "./Creation";


const ManageState = (props) => {
    const data = {
        "name" : "Nitika"  
    }
    const [state , setState] = useState(data);
    const update = () => {
        setTimeout(()=> {
            setState( {
                "name":"riya"
            })
        },1000)
    }
    return(
        <context.Provider value={{state,update}}>
            {props.children}
        </context.Provider>
    )


}

export default ManageState;