import React, { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: "",
        login: "",
        email: "",
        location: "",
        company: "",
        bio: "",
        avatar_url: "",
        followers_url: "",
        following_url: "",
        organizations_url: "",
        starred_url: "",
        public_repos: "",
        public_gists: "",
        followers: "",
        following: "",
        repos_url: "",
    })
    const [detail, setDetail] = useState('')


    return (
        <AuthContext.Provider value={{ user, setUser, detail, setDetail }}>
            {props.children}
        </AuthContext.Provider>
    )
}