import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import UseForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToFeed } from "../../routes/cordinator";


const SignUpPage = () =>
{
    useUnprotectedPage()
    const history= useHistory()

    const [form, onChange, clear] = UseForm({username:"",email:"", password:""})

    const onSubmitForm = (event) =>
    {   
        
        event.preventDefault()
        signUp()
            
    }
    const signUp = () =>
    {
        axios.post("https://labeddit.herokuapp.com/users/signup", form)
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
            <h1>SignUpPage</h1>
            <form onSubmit={onSubmitForm}>
                <input
                name={"username"}
                value= {form.username}
                onChange= {onChange}
                type={"username"}
                required                
                />

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

                <input type="submit" value="Submit" />
                

            </form>
        </div>
    )
}

export default SignUpPage