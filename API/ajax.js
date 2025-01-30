document.querySelector('button').addEventListener('click',()=>{


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

xhr.onload = () => {
    console.log(JSON.parse(xhr.responseText));
    let response = JSON.parse(xhr.responseText);
    let image = document.createElement('img')
    image.setAttribute('src', response.meassge);
    image.style.width = '300px'
    image.style.height = '300px'
    document.querySelector('#dogImages').prepend(image)
}
xhr.send();
})