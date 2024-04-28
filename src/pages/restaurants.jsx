import React from "react";
import Navbar from "../components/navbar";
import '../styles/restaurants.scss'

const products = [
    {
        'id': '1',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '2',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '3',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '4',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '5',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '6',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '7',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '8',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '9',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '10',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '11',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '12',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '13',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '14',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '15',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '16',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '17',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '18',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '19',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '20',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },
    {
        'id': '21',
        'name': 'Quinoa Salad',
        'price' : '30$',
        'logo': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad'
    },

];

const Restaurants = () => {
    return (
        <div>
            <Navbar />
            <div className='restaurants'>
                {products.map((product) => (
                    <div key={product.id} className="foods">
                        <div className="product-item">
                            <img className='product-logo' src={product.logo}></img>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <button className='cart'>Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
