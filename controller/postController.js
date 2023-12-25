
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

export const searchProductbyKeyword = async (request, response) => {
    let keyword = request.query.keyword;
    let keywords = keyword.split('+').join(' ');
    let longitude = request.query.longitude;
    let latitude = request.query.latitude;

    try {
        let posts;
        
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
                        name: { $regex: keywords, $options: "i" }
                    }
                ]
            })
        //console.log(posts);
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}