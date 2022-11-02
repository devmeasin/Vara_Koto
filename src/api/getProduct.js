import {api, getApiSlug , woo_prefix} from '../helpers/apiHelper';


const getProducts = ({pageNumber = 1}) => {
   return api.get(getApiSlug({
    params: {
        per_page: 20,
        page : pageNumber,
    },
    path: '/products',
    prefix: woo_prefix
}));
}

export { getProducts };