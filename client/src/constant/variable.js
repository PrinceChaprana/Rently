export const UserData = {
        email: '',
        name: '',
        password: '',
        picture:'',
        latitude: '',
        longitude: '',
        addressline: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
};

export const ProductData = {
        name: '',
        discription: '',
        picture: '',
        category: '',
        price: '',
        addressline: '',
        longitude:'',
        latitude:'',
        city: '',
        state: '',
        country: '',
        pincode: '',
        postDate: new Date(),
        username: ''
}

export const SearchParams = {
        //important params for default search
        keywords: '',
        longitude: '',
        latitude: '',
        distance: '5',
        //for filteration purposes only
        type: 'product',
        category: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        price: [],
};

export const MessageData = {
        conversationId:'',
        sender:'',
        receiver:'',
        messageType:'',
        message:''
}

export const CategoryData = [
        "mobile",
        "computers",
        "electronics",
        "fashion",
        "beauty",
        "toys",
        "automobiles",
        "books",
        "movies",
        "software",
        "games",
        "home",
        "kitchen",
        "other"
]


export const LocationDefault = {
        longitude: 77.280,
        latitude: 28.390,
        city: 'meerut',
        pincode:250001
      }