
import { ReactNode, useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/router";
// firebase imports
import { User } from "firebase/auth";
import {
    signOut,
    onIdTokenChanged,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import auth from "../config/firebaseClient";
// cookies handler
import nookies from "nookies"
// import types
import { AuthContextType, CredentialsType } from "../types";

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: null,
    error: null,
    signin: () => { },
    signup: () => { },
    signout: () => { }
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("onAuthStateChanged");
            if (user)
                setUser(user)
            else
                setUser(null)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, async (user) => {
            console.log("onIdTokenChanged");
            if (!user) {
                setUser(null)
                nookies.destroy(undefined, "userToken")
                return
            }
            const token = await user.getIdToken()
            setUser(user)
            nookies.set(undefined, "userToken", token, {})
        })
        return () => unsubscribe()
    }, [])

    const signup = ({ email, password }: CredentialsType) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const signin = ({ email, password }: CredentialsType) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user)
                window.location.href = "/browse"
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const signout = () => {
        signOut(auth)
            .then(() => {
                router.push("/")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return <AuthContext.Provider value={{ user, loading, error, signin, signup, signout }}>{!loading && children}</AuthContext.Provider>
}