export const goToLogin = (history) =>
{
    history.push("/Login")
}

export const goToAddRecipe= (history) =>
{
    history.push("/AddRecipe")
}

export const goToFeed = (history) =>
{
    history.push("/")
}

export const goToPost = (history, id) =>
{
    history.push(`/Post/${id}`)
}

export const goToSignUp = (history) =>
{
    history.push("/SignUp")
}