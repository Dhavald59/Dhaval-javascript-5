document.querySelector('button').addEventListener('click', () => {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        let response = data
        let image = document.createElement('img')
        image.setAttribute('src', response.meassge);
        image.style.width = '300px'
        image.style.height = '300px'
        document.querySelector('#dogImages').prepend(image)
        
    })
    .catch((err)=>{
        console.log(err)    
    })
    
})