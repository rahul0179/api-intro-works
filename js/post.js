function lodePost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(jData => displayPost(jData))
}


function displayPost(data) {
    const postContainer = document.getElementById('posts');
    for (const i of data) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
    <h3>${i.title}</h3>
    <h5>${i.body}</h5>`;
        postContainer.appendChild(div);
    }

}
lodePost();