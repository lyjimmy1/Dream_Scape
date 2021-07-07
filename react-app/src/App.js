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
import AllEntries from "./components/Entries/Entries"
import SideBar from "./components/SideBar/sidebar"
import SplashPage from "./components/SplashPage/splashpage"
import {ChakraProvider} from "@chakra-ui/react"

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
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <ProtectedRoute path="/entry-form" exact={true}>
            <EntryForm />
          </ProtectedRoute>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <Route path="/" exact={true} >
            <SplashPage />
            {/* <AllEntries />
            <SideBar /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
