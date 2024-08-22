import axios from 'axios';

export const getInstagramData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Instagram data');
    }
};
