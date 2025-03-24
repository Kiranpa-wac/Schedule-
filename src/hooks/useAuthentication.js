
import { useRecoilState } from "recoil";
import { userPersistanceState } from "../recoil";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const useAuthentication = () => {
    const [user, setUser] = useRecoilState(userPersistanceState)
    
    const handleGoogleLogin = (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential)
            setUser({
                name: decoded.name,
                email: decoded.email,
                picture: decoded.picture,
            })
        } catch (err) {
            console.error(err)
        }
    }

    const handleFbLogin = (response) => {
        setUser({
            name: response.data.name,
            email: response.data.email,
            picture: response.data.picture.data.url
        })
    }
   return {user, handleGoogleLogin, handleFbLogin}
}

export default useAuthentication
