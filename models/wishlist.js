import mongoose from 'mongoose';

const WishlistSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    products:{
        type:Array,
    }
});

const wishlist = mongoose.model('wishlist', WishlistSchema);

export default wishlist;