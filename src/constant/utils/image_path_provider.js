/**
 * 
 * @param {string} imageName 
 * @returns imagePath
 */
function imageProvider(imageName) {
    return process.env.PUBLIC_URL + `img/${imageName}.svg`;
}
export default imageProvider;