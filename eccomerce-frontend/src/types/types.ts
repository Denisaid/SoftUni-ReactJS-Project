export type User = {
    name: string;
    email: string;
    photo: string;
    gender: string;
    role: string;
    dob: string;
    _id: string;
};

export type Product = {
    name: string;
    price: number;
    stock: number;
    category: string;
    ratings: number;
    numOfReviews: number;
    description: string;
    photos: {
        url: string;
        public_id: string;
    }[];
    _id: string;
};

export type Review = {
    rating: number;
    comment: string;
    product: string;
    user: {
        name: string;
        photo: string;
        _id: string;
    };
    _id: string;
};