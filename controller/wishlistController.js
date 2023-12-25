import post from '../models/product.js';
import Wishlist from '../models/wishlist.js'

export const AddToWishlist = async(request,response) => {
    let email = request.query.email;
    let productId = request.query.id;
    console.log(email,productId)
    let user = await Wishlist.findOne({email:email});
    if(!user){
        let wishlist = {
            email:email,
            products:[productId]
        };
        let newWishlist = new Wishlist(wishlist);
        try{
            await newWishlist.save();
            response.status(200).json('wishlist created successfully');
        }catch(e){
            response.status(500).json({message:'error creating wishlist',error:e});
        }
    }else{
        let wishlist = user.products;
        if(wishlist.includes(productId)){
            wishlist.splice(wishlist.indexOf(productId),1);
            //return response.status(200).json('item removed from wishlist');
        }else
            wishlist.push(productId);
        try{
            await Wishlist.findOneAndUpdate({email:email},{$set:{products:wishlist}});
            response.status(200).json('product added to wishlist');
        }catch(e){
            response.status(500).json({message: "Error updating wishlist", error:e});
        }
        
    }
}

export const GetWishlist = async(request,response) => {
    const email = request.query.email;
    const wishlist = await Wishlist.findOne({email:email});
    if(!wishlist) response.status(500).json({message:'no wishlist exist',error:e});
    let products = [];
    let ids = wishlist.products;
    try{
        for(let i=0; i<ids.length; i++){
            let id = ids[i];
            let pr = await post.findById(id);
            products.push(pr);
        }
        //console.log(products);
    }catch(e){
        response.status(500).json({message:'error getting items from wishlist',error:e});
    }
    return response.status(200).json(products);
}