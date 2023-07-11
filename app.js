// All selections on form
// Within the removeBTN addEventListener I used external help from stackoverflow that I'd like to acredit.

/* Information used:
   for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);
    Credit to stackoverflow user bobnice
Url: https://stackoverflow.com/questions/1437502/remove-all-images

*/
let api = `http://api.giphy.com/v1/gifs/search?`
let apiKEY = `&api_key=hwCPwVjbGXIKVv8iojuEcXHn83mYxve0`;
let query = `&q=rainbow`;

const createImg = document.createElement('img')

//Remove button. I will add the remove button to the form so it can delete all images under it.
const removeBTN = document.querySelector('#removeBTN')
removeBTN.addEventListener('click', function(e){
    e.preventDefault(e)
    // This iamge deletion piece of code was taken from stackoverflow.com, remove all images thread. Credit to user bobnice for the solution to rid of all images on a page.
    //Url Cite: https://stackoverflow.com/questions/1437502/remove-all-images

    //Question for Kwame: I tried attaching the button to the form thinking that I could delete the image divs but, couldn't because the button and divs would be considered siblings. Is this the best way to come about this? 
    for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);
})
//Generates image to be appended to div on page.
function generateImage(url) {
    const createImg = document.createElement('img')
    const div = document.querySelector('#div')
    // const div = document.querySelector('#div')
    createImg.src = url;
    div.append(createImg);
    form.append(div);
}

//Requests the necessary image address based on users search input. I then send that imgUrl to my generateImage function. 
async function urlGenerator(search) {
    const response = await axios.get(api + apiKEY + `&q=${search}`)
    const imgUrl = response.data.data[0].images.original.url
    generateImage(imgUrl);
}

//On submit I get the users input from the searchbox and send it to my urlGenerator function to extra an image address
const form = document.querySelector('#giphy');
form.addEventListener('submit', function(e){
    const textInput = document.querySelector('#searchBox');
    e.preventDefault()
    urlGenerator(textInput.value)
    textInput.value = ''
})


