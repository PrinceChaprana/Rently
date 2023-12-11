
import Post from '../models/product.js';


export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
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
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let pincode = request.query.pincode;
    let city = request.query.city;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (pincode) 
            posts = await Post.find({ pincode: pincode });
        else if(city)
            posts = await Post.find({city:city});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const searchProductbyKeyword = async (request, response) => {
    let keyword = request.params.keyword;
    let keywords = keyword.split('+').join(' ');
    console.log(keywords);
    try {
        let posts = await Post.find({
            $or:[
                {name: {$regex:keywords,$options:"i"}},
                {discription: {$regex:keywords,$options:"i"}}
            ]
        });
        console.log(posts);
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}