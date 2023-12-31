// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
        loading: {
                title: "Loading...",
                message: "Data is being loaded. Please wait"
        },
        success: {
                title: "Success",
                message: "Data successfully loaded"
        },
        requestFailure: {
                title: "Error!",
                message: "An error occur while parsing request data"
        },
        responseFailure: {
                title: "Error!",
                message: "An error occur while fetching response from server. Please try again"
        },
        networkError: {
                title: "Error!",
                message: "Unable to connect to the server. Please check internet connectivity and try again."
        }
}

// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
        userLogin: { url: '/login', method: 'POST' },
        userSignup: { url: '/signup', method: 'POST' },
        logout:{url:'/logout', method: 'POST'},
        getUserData : {url:'/profile',method: 'GET',query:true},
        uploadFile:{url: 'file/upload', method: 'POST'},
        createProduct:{url:'/create', method: 'POST'},
        deletePost: { url: '/delete', method: 'DELETE', query: true },
        getAllProducts:{url: '/products', method: 'GET', params: true},
        getProduct:{url:'/product', method: 'GET', params: true},
        filterSearch:{url:'/search/filter/',method: 'GET',params:true},
        defaultSearch: { url: '/search', method: 'GET',params:true},
        wishlist:{url:'/wishlist',method:'PUT',params:true},
        getWishlist:{url:'/wishlist',method:'GET',params:true},
        createConversation:{url:'/conversation',method: 'POST',params:true},
        sendMessage:{url:'/message/add',method: 'POST'},
        getMessage:{url:'/message/get',method: 'GET',params:true},
        getRefreshToken:{url:'/token',method: 'POST'},
}