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
    console.log(jData);
}