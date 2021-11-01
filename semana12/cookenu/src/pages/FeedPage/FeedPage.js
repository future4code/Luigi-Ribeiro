import React from "react";
import Header from "../../components/Header";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () =>
{
    useProtectedPage()
    return(
        <div>
            <Header/>
            <h1>FeedPage</h1>
        </div>
    )
}

export default FeedPage