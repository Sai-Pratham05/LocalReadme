# Nanako Komatsu Image Swiping Project

## Description

This project is a simple image swiping project using buttons. The project uses the images of Nanako Komatsu, a Japanese actress.

## Table of Contents

- [Installation](<#installation>)
- [Usage](<#usage>)
- [Code](<#code>)
- [Code Explanation](<#code-explanation>)
- [Contributing](<#contributing>)
- [License](<#license>)

<!-- -->

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running the following command:

<!-- -->

```
npm install
```

3. Run the project by running the following command:

<!-- -->

```
npm start
```

## Usage

To use the project, open the browser to http://localhost:3000. You will see a page with three buttons: `Prev`, `Next`, and `Close`.

To swipe the images, click the `Prev` or `Next` button. The `Close` button will close the page.

## Code

The code for the project is located in the `src` directory. The following code snippets are included in the project:

```html
<!-- App.js -->

import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [currentlySelected, setCurrentSelected] = useState(0);
  const galleryImgs = document.querySelectorAll(".gallery-img");

  useEffect(() => {
    galleryImgs.forEach((img) => {
      img.addEventListener("click", () => {
        setCurrentSelected(img.dataset.index);
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>Nanako Komatsu Image Swiping Project</h1>
      <div className="gallery">
        {galleryImgs.map((img, i) => (
          <img
            key={i}
            className={
              currentlySelected === i ? "active" : "inactive"
            }
            src={img.src}
            data-index={i}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="prev" disabled={currentlySelected === 0} onClick={() => setCurrentSelected(currentlySelected - 1)}>
          Prev
        </button>
        <button className="next" disabled={currentlySelected === galleryImgs.length - 1} onClick={() => setCurrentSelected(currentlySelected + 1)}>
          Next
        </button>
        <button className="close" onClick={() => window.close()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default App;
```

```css
/* App.css */

.App {
  text-align: center;
}

.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-img {
  width: 200px;
  height: 200px;
  margin: 10px;
}

.active {
  border: 2px solid red;
}
```

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## Code Explanation

The code for the project is relatively simple. The `App.js` file contains the main logic for the project. The `useState` hook is used to store the currently selected image index. The `galleryImgs` array contains all of the images in the gallery. The `useEffect` hook is used to listen for clicks on the images and update the currently selected image index.

The `App.css` file contains the styles for the project. The `gallery` and `gallery-img` classes are used to style the gallery of images. The `active` class is used to style the currently selected image.

The `index.js` file is used to render the `App` component to the DOM.

## Contributing

To contribute to the project, follow these steps:

1. Fork the repository to your local machine.
2. Create a new branch for your changes.
3. Make your changes and commit them to y

<!-- -->

