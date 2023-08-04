# Youtube-Clone

Deployment Link - https://clone-63f84.web.app/

## Summary

- This is a YouTube clone project built with React JS, Redux, React components, Axios API, Tailwind CSS, React Router DOM, and Firebase Authentication. The project aims to replicate the core functionality of YouTube, including displaying video thumbnails, playing videos, responsive sidebarmenu and providing user authentication and deployment using Firebase.

# Table Of Contents

- **Prerequisites**
- **Installation**
- **Firebase config**
- **Getting Started**
- **Structure**
- **Features**
- **Working Features in Project**
- **Contributing to Project**

## Prerequisites

- **Before you begin, ensure that you have the following installed on your machine:**
  - Node.js
  - npm (Node Package Manager)

## Installation

- Clone the repository to your local machine
- Change it into your project directory
- Install all the dependencies
  - npm install

## Firebase Config

- **To use Firebase Authentication in the project, you need to set up a Firebase project and configure the Firebase credentials.**
  - Create a new Firebase project on the Firebase Console.
  - Enable the Authentication service in your Firebase project.
  - Obtain your Firebase project credentials

## Getting Started

- **To run the Youtube Clone locally, follow the steps below:**
  - Start the development server:
    - npm start
  - Navigate to “http://localhost:3000 “ in your browser (if does not open automatically)

## Structure

**The project's structure is organized as follows:**

- “**src**”: contains the main source code files.
  - Components : Includes reusable react components
    - Categories Bar :
    - Header
    - Sidebar
    - Video
- “**Screens**” : contains all the screens.
  - Login Screen : has route as (”/auth”)
  - HomeVideoScreen : Presents the video component and categoriesbar component
- “**Redux**” : contains redux related files.
  - action
  - reducers
  - actiontype
  - Store
- “**App.js”**: The entry point of the application and the root component that renders other components.
- “**index.js”**: Renders the main **App** component and mounts it to the DOM.

# Features

- **Redux**
  - The project utilizes Redux to manage the application's state. Redux provides a predictable state container and allows for better organization and management of data flow within the application.
    2 redux states are created one is authentication state and another is homevideo states containing required data for videos
- **React Components**
  - The project follows a component-based architecture, where different parts of the application are broken down into reusable components. This approach promotes code reusability and modularity.
- **Axios API**
  - Axios is used to make HTTP requests to the backend API. It provides a simple and efficient way to handle asynchronous data fetching and updating
- **Tailwind CSS**
  - Tailwind CSS is used for styling the project. It is a utility-first CSS framework that allows for quick and easy styling of components and layouts.
- **React Router DOM**
  - React Router DOM is used for client-side routing within the application. It enables navigation between different views and ensures a smooth user experience.
    - Routes added are
      - (”/”) which loads homvidescreen
      - (”/auth”) loads logiscreen
- **Firebase Authentication**
  - Firebase Authentication is integrated into the project to provide user authentication functionality. Users can sign up, log in, and log out using their email and password or through various social media platforms.

# Working Features In Project

- **Sidebar** : you can toggle sidebar by clicking menu button on top left corner’
- **Login button** : login using google authentication by clickin on top right corner login button , it will redirect you to login page (”/auth”)
- **Sign in button** : button present in loginscreen page(”/auth”) which uses firebase SigninWithpopup login using your gmail account.
- **Profile image of user** : after authentication profile image of user appears on top right on main page in header
- **Logout button** : present on sidebar which logs you out and removes your profile image from top right of the main page header(”/”)
- **Api data retreival**: Retreives youtube video daata from youtube api
- **Categories Bar**: Set of options or video categories prebuilt which on clicking fetches videos related to that topic

# Contributing to Project

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## FAQ

- Why is it showing runtime/network error**?**
  - refresh the page and you will be good to go
- Why cannot i see anything**?**
  - The youtube api used has a daily set limit for api request if if crosses then the wait time is of 24 hours.

## Support

- Reach out to me at one of the following places!
  - Linkedin at https://www.linkedin.com/in/kratik-bohra-11a39a195

## Credits

- “React” : [Quick Start – React](https://react.dev/learn)
- “React-Redux” : [React Redux | React Redux (react-redux.js.org)](https://react-redux.js.org/)
