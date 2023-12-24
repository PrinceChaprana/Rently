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
        wishlist.push(productId);
        try{
            await Wishlist.findOneAndUpdate({email:email},{$set:{products:wishlist}});
            response.status(200).json('product added to wishlist');
        }catch(e){
            response.status(500).json({message: "Error updating wishlist", error:e});
        }
        
    }
}