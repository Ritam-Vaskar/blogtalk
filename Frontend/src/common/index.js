const backendURI="http://localhost:10000";

const SummaryApi={
    signup:{
        url:`${backendURI}/api/signup`,
        method:"POST"
    },
    login:{
        url:`${backendURI}/api/login`,
        method:"POST"
    },
    current_user:{
        url:`${backendURI}/api/userdetails`,
        method:"GET"
    }
    ,
    logout:{
        url:`${backendURI}/api/logout`,
        method:"GET"
    },
    BlogFetch:{
        url:`${backendURI}/api/blog`,
        method:"GET"
    },
    BlogCreate:{
        url:`${backendURI}/api/blogCreate`,
        method:"POST"
    },
    BlogFetchById:{
        url:`${backendURI}/api/blogFetchById`,
        method:"GET"
    },
    BlogDelete:{
        url:`${backendURI}/api/blogDelete`,
        method:"DELETE"
    },
    BlogFetchByBlogId:{
        url:`${backendURI}/api/blogFetchByBlogId`,
        method:"POST"
    },
    BlogEdit:{
        url:`${backendURI}/api/blogUpdate`,
        method:"PUT"
    }
}


export default SummaryApi