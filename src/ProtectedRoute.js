import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from './recoil'

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const user = useRecoilValue(userState)
    
    return user ? children : navigate('/')
}

export default ProtectedRoute
