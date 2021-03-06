import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
//import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
//import L_FLUX from "../../assets/img/skills/flux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
//import L_DJANGO from "../../assets/img/skills/django.svg";
//import L_FLASK from "../../assets/img/skills/flask.svg";
import L_MongoDB from "../../assets/img/skills/mongodb.svg";
import L_AWS from "../../assets/img/skills/aws.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
//import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
//import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
//import L_PYTHONANYWHERE from "../../assets/img/skills/pythonanywhere.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
//import L_GOLANG from "../../assets/img/skills/go-6.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_cplus from "../../assets/img/skills/cplus.svg"


export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    // {
    //   link: "https://sass-lang.com/",
    //   imgAltText: "Sass",
    //   imgSrc: L_SASS,
    //   skillName: "Sass",
    // },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
    {
      link: "https://redux.js.org/",
      imgAltText: "Redux",
      imgSrc: L_REDUX,
      skillName: "Redux",
    },
    // {
    //   link: "https://facebook.github.io/flux/",
    //   imgAltText: "Flux",
    //   imgSrc: L_FLUX,
    //   skillName: "Flux",
    // },
    {
      link: "https://reacttraining.com/react-router/",
      imgAltText: "React Router",
      imgSrc: L_REACT_ROUTER,
      skillName: "React Router",
    },
    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "React Bootstrap",
      imgSrc: L_REACT_BOOTSTRAP,
      skillName: "React Bootstrap",
    },
    {
      link: "https://material-ui.com/",
      imgAltText: "Material-UI",
      imgSrc: L_MATERIALUI,
      skillName: "Material-UI",
    },
  ],

  backend: [
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Node.js",
      imgSrc: L_NODE_JS,
      skillName: "Node.js",
    },
    {
      link: "https://expressjs.com/",
      imgAltText: "Express",
      imgSrc: L_EXPRESS,
      skillName: "Express",
    },
    // {
    //   link: "https://www.djangoproject.com/",
    //   imgAltText: "Django",
    //   imgSrc: L_DJANGO,
    //   skillName: "Django",
    // },
    // {
    //   link: "https://flask.palletsprojects.com/",
    //   imgAltText: "Flask",
    //   imgSrc: L_FLASK,
    //   skillName: "Flask",
    // },
  ],
  hostingPlatforms: [
    {
      link: "https://www.heroku.com/",
      imgAltText: "Heroku",
      imgSrc: L_HEROKU,
      skillName: "Heroku",
    },
    // {
    //   link: "https://www.digitalocean.com/",
    //   imgAltText: "Digital Ocean",
    //   imgSrc: L_DIGITAL_OCEAN,
    //   skillName: "Digital Ocean",
    // },
    // {
    //   link: "https://pages.github.com/",
    //   imgAltText: "GitHub Pages",
    //   imgSrc: L_GITHUB_PAGES,
    //   skillName: "GitHub Pages",
    // },
    // {
    //   link: "https://www.pythonanywhere.com/",
    //   imgAltText: "pythonanywhere",
    //   imgSrc: L_PYTHONANYWHERE,
    //   skillName: "PythonAnywhere",
    // },
  ],
  programmingLanguages: [
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://www.typescriptlang.org/",
      imgAltText: "TypeScript",
      imgSrc: L_TYPESCRIPT,
      skillName: "TypeScript",
    },
    {
      link: "https://www.python.org/",
      imgAltText: "Python",
      imgSrc: L_PYTHON,
      skillName: "Python",
    },
    {
      link: "https://en.wikipedia.org/wiki/C%2B%2B",
      imgAltText: "C++",
      imgSrc: L_cplus,
      skillName: "C++",
    },
  ],
  databases: [
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: L_MongoDB,
      skillName: "MongoDB",
    },
    {
      link: "https://aws.amazon.com/",
      imgAltText: "AWS",
      imgSrc: L_AWS,
      skillName: "AWS",
    },
  ],
  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
  ],
};