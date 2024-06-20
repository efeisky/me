/**
 * 
 * @param {string} imageName 
 * @returns imagePath
 */
function imageProvider(imageName) {
    return process.env.PUBLIC_URL + `me/img/${imageName}.svg`;
}
export default imageProvider;