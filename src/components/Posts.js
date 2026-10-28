import React from "react";
import Post from "./Post";

class Posts extends React.Component
{
    //state =
    //    {
    //        posts: []
    //    }
    //constructor(props)
    //{
    //    super(props);
    //}
    render()
    {
        return(
            <>
                {
                    this.props.posts.map
                    (
                        post =>
                        (
                            <Post key={post.id} title={post.title} description={post.description } />
                        )
                    )
                }
            </>
        )
    }
}
export default Posts;