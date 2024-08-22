import axios from 'axios';

export const getTwitterData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Twitter data');
    }
};
