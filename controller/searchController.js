import Post from '../models/product.js';

const searchProductTillResult = async (keyword, longitude, latitude, distance) => {

    let posts = [];
    console.log('searched' + distance);
    while (posts.length < 1 && distance < 126000) {
        console.log('searching in ...' + distance);
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

const searchCategory = async (category, longitude, latitude, distance) => {
    distance = distance ? distance : 10000;

    let posts = await Post.find({
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
                category: category,
            }
        ]
    });
    return posts;

}


export const searchDefaultProduct = async (request, response) => {
    //seach based on different params

    let longitude = request.query.longitude;
    let latitude = request.query.latitude;
    let distanceValue = request.query.distance;
    let distance = distanceValue ? distanceValue : 5000;

    let keyword = request.query.keyword;
    let category = request.query.category;
    let city = request.query.city;
    let state = request.query.state;
    let country = request.query.country;
    let pincode = request.query.pincode;

    let posts = [];

    if (keyword) {
        posts = await searchProductTillResult(keyword, longitude, latitude, distance);
    } else if (category) {
        posts = await searchCategory(category, longitude, latitude, distance);
    }
    else if (pincode) {
        posts = await Post.find({ pincode: pincode });
    }
    else if (city) {
        posts = await Post.find({ city: city });
    }
    else if (state) {
        posts = await Post.find({ state: state });
    }
    else if (country) {
        posts = await Post.find({ country: country });
    }

    if (posts.length > 0) return response.status(200).json(posts);

    return response.status(203).json({ msg: "No Product exist" });
}
export const filterSearchProduct = async (request, response) => {

    let longitude = request.query.longitude;
    let latitude = request.query.latitude;
    let distanceValue = request.query.distance;
    let distance = distanceValue?distanceValue*1000:5000;
    let keyword = request.query.keywords;


    let filters = new Map();

    let category = request.query.category;
    let pincode = request.query.pincode;
    let city = request.query.city;
    let state = request.query.state;
    let country = request.query.country;
    if (category && category !== ' ')
        filters .set("category", category );
    if(pincode && pincode !==' ')
        filters .set("pincode", pincode);
    else if (city && city !== ' ')
        filters .set("city", city );
    else if (state && state !== ' ')
        filters .set("state", state );
    else if (country && country !== ' ')
        filters .set("country",country);
    
    console.log(filters);

    const posts = await Post.find({
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
                $or:[
                    {
                        ...filters
                    },
                    {
                        ...filters
                    }
                ]
            }
        ]
    });

    if(posts.length>0) response.status(200).json(posts);
    
    return response.status(203).json({msg:"No products Found"});
}
