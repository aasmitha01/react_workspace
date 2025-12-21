import { createContext,useContext,useEffect,useState } from "react";
const PostsContext=createContext();
export const usePosts=()=>useContext(PostsContext);
export function PostsProvider({chlidren}){
    const [posts,setPosts]=useEffect([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data.slice(0,20)));

    },[]);
    const deletePost=(id)=>{setPosts(posts.filter(post=>post,id!==id));

    };
    const updatePost=(id,updatePost)=>{setPosts(posts.map(post=>post.id===id?updatePost:post));

    };
    return(<PostsContext.Provider value={{posts,deletePost,updatepost}}>
        {Children}
    </PostsContext.Provider>);
}