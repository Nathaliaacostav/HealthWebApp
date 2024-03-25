import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../pages/Home';
import ChatGPT from '../pages/ChatGPT';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import PublicRoutes from './PublicRoutes';
import PrivatedRoutes from './PrivatedRoutes';
import 'react-toastify/dist/ReactToastify.css';
import './AppRoutes.sass';
import { Skeleton } from 'antd';
import { LoginScreenProvider } from '../context/LoginScreenContext';
import PaymentMethod from '../pages/PaymentMethod';
import PaymentValidation from '../pages/PaymentValidation';
import PhotoTaking from '../pages/PhotoTaking';
import SuccessfullPayment from '../pages/SuccessfulPayment';
import DocHome from '../pages/DocHome';
import { onAuthStateChanged } from 'firebase/auth';
import { setIsAuthenticated, setUser } from '../store/users/userSlice';
import { auth } from '../firebase/firebaseConfig';

const AppRoutes = () => {
  
/*   const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  const dispatch = useDispatch();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setIsAuthenticated(true));
      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        })
      );
    } else {
      dispatch(setIsAuthenticated(false));
      dispatch(setUser(null));
    }
    setChecking(false);
  });

  return () => unsubscribe();
}, [dispatch]); */

  return (
      <LoginScreenProvider>
        <Routes>
            {/* <Route element={<PublicRoutes isAuthenticated={isAuthenticated}/>}> */}
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/doctor" element={<DocHome />} />
              <Route path="/chat" element={<ChatGPT />} />
              <Route index element={<Navigate to="/Welcome" />} />
            {/* </Route> */}
            {/* <Route element={<PrivatedRoutes isAuthenticated={isAuthenticated} />}> */}
              <Route path="/payment-method" element={<PaymentMethod />} />
              <Route path="/payment-validation" element={<PaymentValidation />} />
              <Route path="/photo-taking" element={<PhotoTaking />} />
              <Route path="/successfull-payment" element={<SuccessfullPayment />} />
              <Route path="/home" element={<Home />} />
              <Route index element={<Navigate to="/home" />} />
            {/* </Route> */}
        </Routes>
      </LoginScreenProvider>
  )
}

export default AppRoutes;