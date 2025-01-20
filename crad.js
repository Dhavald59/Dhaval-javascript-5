document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('#bookname')
    let price = document.querySelector('#price')
    let category = document.querySelector('#category')
    let author = document.querySelector('#author')
    let oldData = JSON.parse(localStorage.getItem('book')) || []
    let newBook = {
        title: title.value,
        price: price.value,
        category: category.value,
        author: author.value
    };
    oldData.push(newBook);
    localStorage.setItem('book', JSON.stringify(oldData));
    loadData()
    title.value = ""
    price.value = ""
    category.value = ""
    author.value = ""
})
function loadData() {
    let books = JSON.parse(localStorage.getItem('book'))
    let result = ""
    books.forEach(book, index => {
        row.innerHTML = `<tr>
        <td>${index + 1}</td>
        <td>${index + 1}</td>
        <td>${index + 1}</td>
        <td>${index + 1}</td>
        </tr>`
        result = result + row;
    });
    document.querySelector('#bookView').innerHTml = result;
}
loadData()