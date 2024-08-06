import { CartItem, Order, Product, Review, ShippingInfo, User } from './types';

export type MessageResponse = {
    success: boolean;
    message: string;
};

export type UserResponse = {
    success: boolean;
    user: User;
};

export type AllProductsResponse = {
    success: boolean;
    products: Product[];
};

export type CustomError = {
    status: number;
    data: {
        message: string;
        success: boolean;
    };
};

export type CategoriesResponse = {
    success: boolean;
    categories: string[];
};

export type SearchProductsResponse = AllProductsResponse & {
    totalPage: number;
};

export type SearchProductsRequest = {
    price: number;
    page: number;
    category: string;
    search: string;
    sort: string;
};

export type NewProductRequest = {
    id: string;
    formData: FormData;
};

export type ProductResponse = {
    success: boolean;
    product: Product;
};

export type UpdateProductRequest = {
    userId: string;
    productId: string;
    formData: FormData;
};

export type DeleteProductRequest = {
    userId: string;
    productId: string;
};

export type NewReviewRequest = {
    rating: number;
    comment: string;
    userId?: string;
    productId: string;
};

export type AllReviewsResponse = {
    success: boolean;
    reviews: Review[];
};

export type DeleteReviewRequest = {
    userId?: string;
    reviewId: string;
};

export type NewOrderRequest = {
    shippingInfo: ShippingInfo;
    orderItems: CartItem[];
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    user: string;
};

export type UpdateOrderRequest = {
    userId: string;
    orderId: string;
};

export type AllOrdersResponse = {
    success: boolean;
    orders: Order[];
};

export type OrderDetailsResponse = {
    success: boolean;
    order: Order;
};

export type AllUsersResponse = {
    success: boolean;
    users: User[];
};

export type DeleteUserRequest = {
    userId: string;
    adminUserId: string;
};