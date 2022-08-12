function lodeData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(jsonData => console.log(jsonData.userId))

}

function lodeUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(x => x.json())
        .then(jData => displayData(jData));
}
function lodePost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(jData => console.log(jData));
}
function displayData(jData) {
    const ul = document.getElementById('user');
    for (const i of jData) {
        console.log(i.name);
        /* if (i.id == 5) {
            console.log('fuck u Ervin')
        } */
        const li = document.createElement('li')
        li.innerText = `Name: ${i.name}  Email Id: ${i.email}     user Name: ${i.username}`;

        ul.appendChild(li)
        li.style.color = 'red';

    }
}