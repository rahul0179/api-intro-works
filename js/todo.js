function todo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(jData => displayShow(jData))
}


function displayShow(data) {

    const post = document.getElementById('postData')
    for (const i of data) {
        console.log(i.id); const div = document.createElement('div')
        div.innerHTML = `post : 
        <h2>${i.title}</h2>`;
        post.appendChild(div);
    }
}




