import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage"




const Router = () =>
{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/AddRecipe">
                    <AddRecipePage/>
                </Route>

                <Route exact path="/">
                    <FeedPage/>
                </Route>

                <Route exact path="/Login">
                    <LoginPage/>
                </Route>

                <Route exact path="/Post/:id"> 
                    <PostPage/>
                </Route>

                <Route exact path="/SignUp">
                    <SignUpPage/>
                </Route>
                <Route>
                    <div>
                        <h1>Error</h1>
                        <p>Page not found</p>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router