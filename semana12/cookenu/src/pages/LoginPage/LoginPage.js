import React from "react";
import Header from "../../components/Header";
import UseForm from "../../hooks/useForm";
import { goToFeed, goToSignUp } from "../../routes/cordinator";
import { useHistory } from "react-router"
import axios from "axios";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () =>
{
    useUnprotectedPage()
    const history = useHistory()

    const [form, onChange, clear] = UseForm({email: "", password: ""})

    const onSubmitForm = (event) =>
    {
        event.preventDefault()
        login()
    }

    const login = () =>
    {
        axios.post("https://labeddit.herokuapp.com/users/login", form)
        .then((res)=> {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err)=> alert(err))
    }
    
    return(
        <div>
            <Header/>

            <h1>LoginPage</h1>

            <form onSubmit = {onSubmitForm}>
                <input
                name={"email"}
                value= {form.email}
                onChange= {onChange}
                type={"email"}
                required                
                />
                <input
                name = {"password"}
                value = {form.password}
                onChange= {onChange}
                type={"password"}
                required
                />

                <button type={"submit"}>Login</button>
                

            </form>

            <button onClick = {() => goToSignUp(history)}>SignUp</button>
        </div>
    )
}

export default LoginPage