document.addEventListener("DOMContentLoaded", function() {
    const colorInputs = document.querySelectorAll('input[name="color"]');
    const nav = document.querySelector('nav');
    const backgroundColor = document.querySelector('.backgroundColor');
    const leftArrowCircle = document.querySelector('.arrow-circle:nth-child(1)');
    const rightArrowCircle = document.querySelector('.arrow-circle:nth-child(2)');
    const logoImage = document.querySelector('.logo-image'); // Select the logo image element

    let currentColorIndex = 0;
    const colors = ['#FF1925', '#00004f', '#228B22', '#5D3FD3']; // Define your colors here
    const images = ["sneakerdisplay.png", "sneakerdisplay2.png", "sneakerdisplay3.png", "sneakerdisplay4.png"]; // Define your image sources here

// Function to slide in the image from the right and center it
function slideInImage(imageElement, imageSrc) {
    imageElement.style.transition = 'right 0.5s ease'; // Apply transition property
    imageElement.style.right = '-230%'; // Position image off-screen to the right

    // Once the sliding animation is complete, update the image source
    setTimeout(() => {
        imageElement.src = imageSrc;
        imageElement.style.right = '-14.7%'; // Slide image to the center
    }, 300); // Wait for the sliding animation to complete before updating the image
}

// Function to update the color and image
function updateColorAndImage() {
    const selectedColor = colors[currentColorIndex];
    const selectedImage = images[currentColorIndex];

    // Smoothly transition background color change
    transitionBackground(nav, selectedColor);
    transitionBackground(backgroundColor, selectedColor);

    // Update the checked state of the color input
    colorInputs.forEach(input => {
        input.checked = input.value === selectedColor;
    });

    // Slide in the image from the right
    slideInImage(logoImage, selectedImage);
}


// Function to smoothly transition background color change
function transitionBackground(element, color) {
    element.style.transition = 'background-color 0.5s ease';
    element.style.backgroundColor = color;
    // Reset transition after the transition ends
    setTimeout(() => {
        element.style.transition = '';
    }, 1000); // Adjust the delay (in milliseconds) to match your transition duration

}



    // Event listener for left arrow circle
    leftArrowCircle.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
        updateColorAndImage();
    });

    // Event listener for right arrow circle
    rightArrowCircle.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        updateColorAndImage();
    });

    // Event listener for color inputs
    colorInputs.forEach(input => {
        input.addEventListener("change", function() {
            // Find the index of the selected color
            currentColorIndex = colors.indexOf(this.value);
            updateColorAndImage();
        });
    });
});
