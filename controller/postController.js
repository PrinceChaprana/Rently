import Post from '../models/product.js';


export const createPost = async (request, response) => {
    try {
        const postData = {
            name: request.body.name, discription: request.body.discription,
            picture: request.body.picture, username: request.body.username, password: request.body.password,
            category: request.body.category, price: request.body.price,
            postDate: request.body.postDate, addressline: request.body.addressline,
            city: request.body.city, state: request.body.state, country: request.body.country,
            pincode: request.body.pincode, location: { type: "Point", coordinates: [request.body.longitude, request.body.latitude] }
        };
        const post = await new Post(postData);
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        await post.deleteOne()
        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getPost = async (request, response) => {
    let id = request.query.id;
    try {
        const post = await Post.findById(request.query.id);
        //console.log(id);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let pincode = request.query.pincode;
    let city = request.query.city;
    let id = request.query.id;
    let posts;
    try {
        if (username)
            posts = await Post.find({ username: username });
        else if (pincode)
            posts = await Post.find({ pincode: pincode });
        else if (city)
            posts = await Post.find({ city: city });
        else if (id)
            posts = await Post.findById(id);
        //console.log(id)

        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}

const searchProductTillResult = async (keyword,longitude,latitude,distance) => {

    let posts = [];
    console.log('searched' + distance);
    while(posts.length < 1 && distance < 126000) {
        console.log('searching in ...'+ distance);
        posts = await Post.find({
            $and: [
                {
                    location: {
                        $near: {
                            $geometry: {
                                type: "Point",
                                coordinates: [longitude, latitude]
                            },
                            $maxDistance: distance
                        }
                    }
                },
                {
                    name: { $regex: keyword, $options: "i" },
                }
            ]
        });

        distance = distance * 5;
    }

    return posts;

}

export const searchProduct = async (request, response) => {
    let posts;
    //handle multiple keywords string
    let keyword = request.query.keywords;
    let type = request.query.type;
    //if type is account return all products from that user
    if (type === 'account') {
        posts = await Product.find({ username: keyword });
        if (posts)
            return response.status(200).json(posts);
        return response.status(203).json({ msg: 'Product not found from user ' + keyword });
    } else {
        let pincode = request.query.pincode;
        let city = request.query.city;
        let state = request.query.state;
        let country = request.query.country;
        if (pincode) {
            posts = await Product.find({ pincode: pincode });
        } else if (city) {
            posts = await Product.find({ city: city });
        } else if (state) {
            posts = await Product.find({ state: state });
        } else if (country) {
            posts = await Product.find({ country: country });
        } else {
            console.log('searching for keyword')
            let category = request.query.category;
            let distanceValue = request.query.distance;
            let distance = distanceValue ? distanceValue * 1000 : 5000;
            let longitude = request.query.longitude;
            let latitude = request.query.latitude;
            if(!category){
                console.log('inside');
                //search till we get some results
                posts = await searchProductTillResult(keyword,longitude,latitude,distance);
            }else{
                posts = await Post.find({
                    $and: [
                        {
                            location: {
                                $near: {
                                    $geometry: {
                                        type: "Point",
                                        coordinates: [longitude, latitude]
                                    },
                                    $maxDistance: distance
                                }
                            }
                        },
                        {
                            name: { $regex: keyword, $options: "i" },
                            category:category
                        }
                    ]
                })
            }
        }
        if (posts.length < 1) return response.status(203).json({ msg: 'Products not found' });
        console.log(posts);
    }

    return response.status(200).json(posts);

}

export const searchProductbyKeyword = async (request, response) => {
    let keyword = request.query.keywords;
    let longitude = request.query.longitude;
    let latitude = request.query.latitude;

    try {

        posts = await Post.find({
            $and: [
                {
                    location: {
                        $near: {
                            $geometry: {
                                type: "Point",
                                coordinates: [longitude, latitude]
                            },
                            $maxDistance: 5000
                        }
                    }
                },
                {
                    name: { $regex: keyword, $options: "i" },
                }
            ]
        })

        //console.log(posts);
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}