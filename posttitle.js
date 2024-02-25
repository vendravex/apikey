document.addEventListener('DOMContentLoaded', function() {
    // Access the post title from the localized data
    const postTitle = postTitleData.post_title;

    // Update the HTML element with the post title
    document.getElementById('post-title').innerText = postTitle;
});
