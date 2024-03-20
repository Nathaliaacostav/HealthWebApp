import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { getToken, onMessage } from 'firebase/messaging';
import { auth, messaging } from '../firebase/firebaseConfig';
import { setIsAuthenticated, setUser } from '../store/users/userSlice';
import { toast } from 'react-toastify';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import PublicRoutes from './PublicRoutes';
import PrivatedRoutes from './PrivatedRoutes';
import 'react-toastify/dist/ReactToastify.css';
import './AppRoutes.sass';
import { Skeleton } from 'antd';
import { LoginScreenProvider } from '../context/LoginScreenContext';

const AppRoutes = () => {
  const { isAuthenticated, user } = useSelector((store) => store.user);
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid && !user) {
        dispatch(setIsAuthenticated(true));
        dispatch(
          setUser({
            id: userLogged.uid,
            email: userLogged.email,
            name: userLogged.displayName,
            accessToken: userLogged.accessToken,
            photoURL: userLogged.photoURL
          })
        );
      }
      setChecking(false);
    });
  }, [dispatch, user]);

  if (checking) {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }

  return (
    <LoginScreenProvider>
      <Routes>
        <Route path="/">
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="welcome" element={<Welcome />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="home" element={<Home />} />
            <Route index element={<Navigate to="/home" />} />
          </Route>
        </Route>
      </Routes>
    </LoginScreenProvider>
  );
};

export default AppRoutes;