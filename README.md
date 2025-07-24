![adviceimg](https://github.com/user-attachments/assets/9d3a18f2-8c74-4ef2-91d6-42eff92388df)# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot
![adviceimg](https://github.com/user-attachments/assets/0d86c0b8-a3d6-48aa-8c96-f574ba990adc)

### Links

-  [Solution URL](https://github.com/JudithJude369/Advice-Generator-App)
-  [Live Site URL](https://advice-generator-app-sigma-five.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- React

### What I learned
This project really thought me alot, especially in the aspect of using useEffect for data fetching and useState for re-rendering.
```react
 const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
```
```css

main {
  max-width: 900px;
  width: 90%;
  border-radius: 5px;
  background-color: var(--Blue-900);
  box-shadow: 0 10px 15px -3px rgba(61, 8, 8, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: var(--FS);
  position: relative;
}
```

### Continued development

I hope to build more with React and also improve my responsive design.

### Useful resources

- [FreeCodeCamp]https://www.freecodecamp.org/) - This freecodecamp fullstack curriculum is helping me understand Javascript.

## Author

- Frontend Mentor - [@JudithJude369](https://www.frontendmentor.io/profile/JudithJude369)
- Twitter - [@JudithJ08832378](https://x.com/JudithJ08832378)

## Acknowledgments
I would like to really acknowledge freecodecamp for making learning easy and resources accessible for everyone.
