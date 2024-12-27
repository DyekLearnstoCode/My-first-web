function revealMessage() {
    document.getElementById('hidden-message').style.display = 'block';
}

function showPicture(month) {
    // Hide all images
    const images = document.querySelectorAll("img");
    images.forEach(img => img.classList.remove("active"));

    // Show the selected image
    const selectedImage = document.getElementById(month);
    if (selectedImage) {
        selectedImage.classList.add("active");
    }
}

document.querySelectorAll('.interactive').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('active');
    });
});
