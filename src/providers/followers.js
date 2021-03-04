import React, { useState } from "react";

export const FollowContext = React.createContext({})

export const FolowProvider = (props) => {
    const [follow, setFollow] = useState([])
    const [following, setFollowing] = useState([])
    return (
        <FollowContext.Provider value={{ follow, setFollow, following, setFollowing }}>
            {props.children}
        </FollowContext.Provider>
    )
}



