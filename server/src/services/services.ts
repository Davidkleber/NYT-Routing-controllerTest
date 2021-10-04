import axios from 'axios';
require ('dotenv').config();

const ServicesNoticies = async (section: string) => {
    return await axios(`https://api.nytimes.com/svc/topstories/v2/${section}.json`, {
        params: {
            'api-key': process.env.API_KEY
        }
    })
}

export default ServicesNoticies;