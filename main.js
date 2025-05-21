const postList = document.querySelector('.post-list')

const addPostForm = document.querySelector('.add-post-form')
const titlevalue = document.getElementById('.title-value') 

let output = '';


const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `
        <div class="card mt-4 col-md-6 bg-ligt">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${post.subtitle}</h6>
                    <p class="card-text">${post.content}</p>
                    <p class="text-danger">${new Date(post.created_at).toString()}</p>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                </div> 
                
                 </div>
        `;
    })
    postList.innerHTML = output;
    
}

const url = 'http://localhost:3000/blogs'


//Get - Read the posts
//Method: GET

fetch(url)
.then(res => res.json())
.then(data => renderPosts(data))



// Crate - Insenrt new post 

// method : post

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault()


        console.log(titlevalue.value);
        
    

    

    fetch(url, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //     title:

        // })
    })
    
})



