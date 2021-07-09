import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import EntryForm from "./components/EntryForm/entryform";
import SplashPage from "./components/SplashPage/splashpage"
import {ChakraProvider} from "@chakra-ui/react"
import UpdateEntry from "./components/EntryForm/UpdateEntry"
import HomePage from "./components/HomePage/HomePage";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact={true} >
            <SplashPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/entry-form" exact={true}>
            <EntryForm />
          </ProtectedRoute>
          <ProtectedRoute path="/entry-form/:id" exact={true}>
            <UpdateEntry />
          </ProtectedRoute>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/home" exact ={true}>
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
