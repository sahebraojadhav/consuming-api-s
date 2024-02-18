const postListContainer=document.querySelector('.posts-list-container');

function fetchUsingXHR()
{
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
    xhr.responseType='json';
    xhr.send();

    console.log(xhr);

    xhr.onload=()=>{
        if(xhr.status===200){
            console.log(xhr);
            displayResults(xhr.response)
    } else{
        console.log("error occured")
         }
    }
}

function displayResults(posts){
    postListContainer.innerHTML=posts.map((postItem)=>`
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `).join("")
}
fetchUsingXHR();