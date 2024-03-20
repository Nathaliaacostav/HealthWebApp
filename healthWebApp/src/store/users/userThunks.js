import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import { setUser, setIsAuthenticated, setLoading, setError } from './userSlice'

// Función para registrar un nuevo usuario
export const registerUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    dispatch(setUser(user))
    dispatch(setIsAuthenticated(true))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}

// Función para iniciar sesión
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    dispatch(setUser(user))
    dispatch(setIsAuthenticated(true))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}

// Función para cerrar sesión
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    await signOut(auth)
    dispatch(setUser(null))
    dispatch(setIsAuthenticated(false))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}