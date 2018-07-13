import axios from '../config/axios';
import { RECEIVE_CATEGORIES } from '../constants';

export const receiveCategories = (categories) => ({
        type: RECEIVE_CATEGORIES,
        categories
});

export const fetchCategories = () => dispatch =>
        axios.get('/category')
                .then(res => res.data)
                .then(categories => {
                        console.log(categories)
                        dispatch(receiveCategories(categories))
                });