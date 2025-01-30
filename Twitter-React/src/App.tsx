import TweetsPage from "./pages/Auth/tweets/tweets.Page.tsx";
import { useState } from "react";
import LoginPage from "./pages/Auth/LoginPage"


function App() {
 
    const [isLogged, setIsLogged] = useState(false);
    

    const handleLogin = () => {
        setIsLogged(true);
    }

/*     const handleLogout = () => {
        setIsLogged(false);
    } */

    return isLogged ? <TweetsPage /> : <LoginPage onLogin={handleLogin} />
    
  
}

export default App
