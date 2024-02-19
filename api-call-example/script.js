const postListContainer = document.querySelector(".posts-list-container");

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  console.log(xhr);

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr);
      displayResults(xhr.response);
    } else {
      console.log("error occured");
    }
  };
}

function displayResults(posts) {
  postListContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `
    )
    .join("");
}
//fetchUsingXHR();

function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

//fetchUsingFetchMethod();

async function fetchUsingAsyncAwait(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"GET"
    })
    const result=await response.json();

    displayResults(result);
}
//fetchUsingAsyncAwait();

function helperMethod(method,url){
  const promise=new promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType="json";
        xhr.send();

        xhr.onload=()=>{
          if(xhr.status==200){
            resolve(xhr.response)
          }
          else{
            reject(xhr.response)
          }
        }
  })
  return promise;
}

async function fetchUsingXHRAsyncAwait(){
    const response=await helperMethod('GET',"https://jsonplaceholder.typicode.com/posts")
    displayResults(response);

  }

fetchUsingXHRAsyncAwait()