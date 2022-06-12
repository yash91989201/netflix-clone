import React, { useEffect } from "react"
// next js imports
import { NextComponentType, NextPage } from "next"
import { useRouter } from "next/router"
// context
import { useAuth } from "../../hooks/AuthContext"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (!user.uid) {
            router.push("/")
        }
    }, [router, user])
    return <>
        {user.uid ? children : null}
    </>


}

export default ProtectedRoute