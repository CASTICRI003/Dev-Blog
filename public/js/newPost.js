const newFormHandler = async (event) => {
    event.preventDefault();

    const newPost = document.querySelector('#new-post');
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content}),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post.');
        }
    }
};


const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post.');
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);