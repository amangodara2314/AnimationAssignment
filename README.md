Animation Assignment
Welcome to the Animation Assignment repository! This project showcases various animations implemented using React and CSS. It's a part of an assignment designed to demonstrate the ability to create smooth, performant animations without relying on external libraries.

Project Overview
This project includes three different types of animations:

Fade-In Animation
Slide-In List Animation
Rotate Button Animation

Animations Implemented
1. Fade-In Animation
The Fade-In Animation component smoothly fades in a text and image when the component is rendered. This is a simple yet effective way to make content appear more dynamically on the screen.

2. Slide-In List Animation
The Slide-In List Animation component makes a list of items slide in from the left when the component is loaded. Each item slides in with a slight delay, creating a staggered effect that draws attention to each item as it appears.

3. Rotate Button Animation
The Rotate Button Animation component features a button that rotates 360 degrees clockwise when clicked. The button stays in its rotated position after the animation completes, demonstrating a state change in response to user interaction.

Technologies Used
React: A JavaScript library for building user interfaces.
CSS: For styling components and creating animations.

Getting Started
To get a local copy up and running, follow these steps:

Prerequisites
Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from Node.js.

Installation
Clone the repository

git clone https://github.com/amangodara2314/AnimationAssignment.git
Navigate to the project directory

cd AnimationAssignment
Install dependencies

npm install
Start the development server

npm start
Open your browser

Go to http://localhost:3000 to see the animations in action.

Usage
Fade-In Component
The FadeInComponent demonstrates a fade-in effect for both text and an image. To see the animation, simply ensure the component is rendered on the screen.

Slide-In List Component
The SlideInList demonstrates a list of items sliding in from the left. Each item has a slight delay before it appears, creating a sequential slide-in effect.

Rotate Button Component
The RotateButton demonstrates a button that rotates 360 degrees when clicked. The button stays in its rotated state after the animation finishes.

Code Structure
Here's an overview of the project structure:

AnimationAssignment/
├── public/
├── src/
│   ├── components/
│   │   ├── FadeInComponent.js
│   │   ├── SlideInList.js
│   │   ├── RotateButton.js
│   │   ├── FadeInComponent.css
│   │   ├── SlideInList.css
│   │   ├── RotateButton.css
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md

Detailed Component Descriptions

FadeInComponent.js
This component displays an image and some text that fade in smoothly. The CSS handles the animation, which transitions the opacity from 0 to 1.

SlideInList.js
This component displays a list of items that slide in from the left. The CSS animation transitions the transform property, sliding each item into view.

RotateButton.js
This component contains a button that rotates 360 degrees on click. The rotation is handled via a CSS animation triggered by updating the component state in React.

