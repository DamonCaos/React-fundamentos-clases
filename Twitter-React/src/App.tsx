import TweetsPage from "./pages/Auth/tweets/tweets.Page.tsx";
import { useState } from "react";
import LoginPage from "./pages/Auth/LoginPage"
import storage from "./utils/storage.ts";


interface Props {
  defaultIsLogged: boolean;
}

function App({defaultIsLogged}: Props) {  
 
    const [isLogged, setIsLogged] = useState(defaultIsLogged);


    const handleLogin = () => {
        setIsLogged(true);
    }
    const handleLogout = () => {
        setIsLogged(false);
    } 
/*     const handleLogout = () => {
        setIsLogged(false);
    } */

    return isLogged ? <TweetsPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />
    
  
}

export default App
