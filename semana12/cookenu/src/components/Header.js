import { goToFeed, goToLogin } from "../routes/cordinator"
import { useHistory } from "react-router"

const Header=()=>
{   
    const history = useHistory()
    return (
        <div>
            <button onClick= {() => goToFeed(history)}>Cookenu</button>
            <button onClick= {() => goToLogin(history)}>Login</button>
        </div>
    )
}

export default Header