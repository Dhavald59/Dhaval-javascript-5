document.querySelector('#btn').addEventListener('click', () => {
    let searchText = document.querySelector('#search').value;
    fetch(`https://www.omdbapi.com/?apikey=49e6c128&t=${searchText}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            let movieDetail = document.querySelector("#movieDetail");
            let poster = document.createElement('img');
            poster.setAttribute("src",data.Poster)
            poster.style.width = "300px"
            poster.style.height = "300px"
            movieDetail.append(poster);

            let title = document.createElement('h2')
            title.innerHTML = data.Title;
            movieDetail.appendChild(title);
        })
        .catch(err => console.log(err))
})