
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { Loader } from '../components/Loader';

export const AuthContext = createContext({});

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [authPending, setAuthPending] = useState(true);
  
    useEffect(() => {
      return auth.onAuthStateChanged(result => {
        if (result) {
          const { displayName, email, uid, photoURL, phoneNumber } = result;
          const currentUser = {
            displayName,
            email,
            uid,
            photoURL,
            phoneNumber,
            isAdmin: false,
          };
          console.log(result);
          // read claims if necessary
          setAuthPending(true);
          result.getIdTokenResult().then(({ claims }) => {
            currentUser.isAdmin = Boolean(claims.admin);
            setUser(currentUser);
            setAuthPending(false);
          });
        } else {
          setUser();
          setAuthPending(false);
        }
      });
    }, []);
  
    const { children } = props;
  
    if (authPending) {
      return <Loader />;
    }
  
    return (
      <AuthContext.Provider
        value={{
          user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }