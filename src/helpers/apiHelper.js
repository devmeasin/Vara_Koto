import axios from 'axios';
import { baseUrl, WOOCOMMERCE_API_CLIENT, WOOCOMMERCE_API_SECRET } from '../config';

const woo_prefix = '/wc/v3', cafe_prefix = '/wpcafe/v1';

const api = axios.create({
    baseURL: baseUrl + '/wp-json',
    withCredentials: true,
    headers: {
        Accept: ' application/json',
        'Content-Type': 'application/json'
    },
    auth: {
        username: WOOCOMMERCE_API_CLIENT,
        password: WOOCOMMERCE_API_SECRET,
    }
});

const getApiSlug = (params) => {

    let slug = params.prefix + params.path;
    if(params.params) {
        slug += '?'+ new URLSearchParams(params.params);
    }
    return slug;
    
};


export { api, getApiSlug,  woo_prefix , cafe_prefix};