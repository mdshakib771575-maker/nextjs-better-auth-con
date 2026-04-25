const posts = [

    {
        id: 1,
        title: " frist post",
        description: "asdfghkl;"
    },

    {
        id: 2,
        title: "second post",
        description: "asdfghkl;"
    },

    {
        id: 3,
        title: "third post",
        description: "asdfghkl;"
    },
]

export const addPost = (newPost) => {
    posts.push(newPost)
    console.log(posts);
}

export const getPosts = () => {
    return posts
}