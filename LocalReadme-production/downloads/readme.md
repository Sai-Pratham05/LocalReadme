# here your text…## Title: Nana Komatsu Swiper

## Description:

This is a website were we can swipe the images of nana komatsu a japanese actress.

## Table of Contents

- [Installation](<#installation>)
- [Usage](<#usage>)
- [Code](<#code>)
- [Code Explanation](<#code-explanation>)
- [Contributing](<#contributing>)
- [License](<#license>)

<!-- -->

## Installation

To install this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Run the project by running `npm start`.

<!-- -->

## Usage

To use this project, follow these steps:

1. Open the project in your browser.
2. Click on the images to swipe through them.

<!-- -->

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nana Komatsu Swiper</title>
</head>
<body>
  <div class="container">
    <div class="gallery">
      <img src="images/nana-komatsu-1.jpg" class="gallery-img active">
      <img src="images/nana-komatsu-2.jpg" class="gallery-img">
      <img src="images/nana-komatsu-3.jpg" class="gallery-img">
    </div>
    <div class="controls">
      <button class="prev">Prev</button>
      <button class="next">Next</button>
    </div>
  </div>
</body>
</html>
```

```js
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function(){
    //well come back to you
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active");
    nextBtn.disabled = false;
    if(currentlySelected===0){
        prevBtn.disabled = true;//it means prev button is in grey in color
    }

});

nextBtn.addEventListener('click',function(){
   galleryImgs[currentlySelected].classList.remove("active");
   currentlySelected++;
   galleryImgs[currentlySelected].classList.add("active");
   prevBtn.disabled = false;//when you move to next pic,the previous one should be blanked out isn't?//
   if(galleryImgs.length === currentlySelected+1){
    nextBtn.disabled = true;
   }
});
```

## Code Explanation

The code for this project is fairly simple. It consists of a few HTML elements, some JavaScript, and a CSS stylesheet.

The HTML elements are used to create the layout of the website and to display the images. The JavaScript is used to control the swiping of the images and to disable the buttons when necessary. The CSS stylesheet is used to style the elements of the website.

## Contributing

To contribute to this project, please follow these steps:

1. Fork the repository to your own account.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Push your changes to your fork.
5. Create a pull request to the original repository.

<!-- -->

## License

This project is licensed under the MIT License.

## here your text…# here your text…### here your text…

