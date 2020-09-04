import axios from 'axios';

const client = axios.create({
    baseURL: 'https://outside-in-dev-api.herokuapp.com/1oZrs5FhN6k89xHf0HZYkRecNoUneok6'
    // baseURL: 'https://outside-in-dev-api.herokuapp.com/1oZrs5FhN6k89xHf0HZYkRecNoUneok6BAD'

});
const api = {
    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    },
};

export default api;