import axios from "axios";
const getImages = async () => {
    axios.get('http://res.cloudinary.com/nvge/image/list')
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

export default async (request, response) => {
    const images = await getImages();
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.end(res.end(JSON.stringify({ images })))
}
