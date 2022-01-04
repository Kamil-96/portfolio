const projects = [
  {
    id: 1,
    name: 'E-commerce',
    description: 'This is a full stack online clothes shop application. It is a final course project. The application enables browsing products, filtering them and placing orders. It is connected to a database (MongoDB Atlas) where are served products data and stored placed orders. Frontend is written in JavaScript, React, Redux, React-Router and Sass. API requests are executed by Redux-Thunk and Axios. On backend the server connects to the MongoDB Atlas using endpoints and Mongoose.',
    githubLink: 'https://github.com/Kamil-96/e-commerce',
    herokuLink: 'https://fast-lowlands-80053.herokuapp.com',
    technologies: 'JavaScript, React, Redux, React-Router, Sass, Redux-Thunk, Axios, Node.js, Express, MongoDB Atlas, Mongoose',
    image: '/images/image_ecommerce.png',
  },
  {
    id: 2,
    name: 'Music Festival',
    description: 'This is a full stack web page of music festival. It allows to book a seat for a specific day of the event. The application uses Websockets to seat booking. Frontend is created in JavaScript, React, Redux, React-Router and Sass. Redux-Thunk and Axios are used for handling requests. Backend uses Node.js, Express, MongoDB Atlas and Mongoose. The application contains endpoints tests using Mocha and Chai.',
    githubLink: 'https://github.com/Kamil-96/rest-api-app',
    herokuLink: 'https://stormy-bayou-07450.herokuapp.com',
    technologies: 'JavaScript, React, Redux, React-Router, Sass, Redux-Thunk, Axios, Node.js, Express, MongoDB Atlas, Mongoose, Mocha, Chai',
    image: '/images/image_festival.png',
  },
  {
    id: 3,
    name: 'Travel Agency',
    description: 'This is a frontend web page of luxury travel agency. It allows browsing trips, filtering them and making orders. The application is written in JavaScript,  React, Redux, React-Router and Sass. Few components are well-tested using Jest and Enzyme. Some of the tests are even written in Test Driven Development approach.',
    githubLink: 'https://github.com/Kamil-96/travel-agency',
    herokuLink: 'https://intense-lowlands-09045.herokuapp.com',
    technologies: 'JavaScript, React, Redux, React-Router, Sass, Jest, Enzyme',
    image: '/images/image_agency.png',
  },
  {
    id: 4,
    name: 'Pizzeria',
    description: 'This is a frontend web page of pizzeria. It enables browsing, customising products and placing orders. Furthermore the application allows booking tables in the restaurant. This project is written in HTML5, Sass and JavaScript without any framework.',
    githubLink: 'https://github.com/Kamil-96/project-pizzeria',
    herokuLink: 'https://fast-retreat-54260.herokuapp.com',
    technologies: 'HTML5, Sass, JavaScript',
    image: '/images/image_pizzeria.png',
  },
];

export default projects;
