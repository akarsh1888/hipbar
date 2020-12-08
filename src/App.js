import { useEffect, useState } from "react";
import Landing from "./pages/landing/landing";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const url = window.location.pathname.replace("/", "");
    if (url === "signup") {
      setPath("signup");
    } else {
      setPath("index");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {path === "signup" ? <SignInAndSignUpPage /> : <Landing />}
      </header>
    </div>
  );
}

export default App;
