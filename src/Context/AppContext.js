import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl';
import { Navigate, useNavigate } from 'react-router-dom';
 export const AppContext = createContext();

export default function AppContextProvider({children}) {
const [loading, setLoading] = useState(false);
 const [posts, setPosts] = useState([]);
 const [page, setPage] = useState(1);
 const [totalPages, setTotalpage] = useState(null);
 const navigation = useNavigate();

 async function fetchBlogPosts(page = 1, tag=null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag){
      url += `&tag=${tag}`;
    }
    if(category){
      url += `&category=${category}`;
    }
    try{
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalpage(data.totalPages); 
    }
    catch(error)
    {
        console.log("error in fetching data")
        setPage(1);
        setPosts([]);
        setTotalpage(null);
    }
    setLoading(false);
 }

 function handlePageChange(page) {
   navigation({search: `?page=${page}`})
    setPage(page);
   
 }

 const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalpage,
    fetchBlogPosts,
    handlePageChange
    };

    return<AppContext.Provider value={value}> 
    {children}
    </AppContext.Provider>

 }

 
