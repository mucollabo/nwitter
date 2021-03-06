import React, {useState, useEffect} from 'react';
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
    const [init, setInit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        setInit(true);
    });
  }, [])
  return (
      <>
          {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
        <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      </>
  );
}

export default App;
