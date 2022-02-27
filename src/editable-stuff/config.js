// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Malsha",
  middleName: "",
  lastName: "Kodagoda",
  message: "  Designer | Developer | Editor and Passionate about changing the world with technology. ",
  message2:"Passionate about changing the world with technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hashirshoaeb",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sub.png"),
  imageSize: 375,
  message:
    "Hi. I am Malsha Kodagoda. I am a third-year student at Sri Jayewardenepura University. My Bachelor of Arts degree in Information and Communication Technology. I have already done a few projects.I am a very practical and work-hard person with an amiable disposition and strong cultural values. Istrongly believe in accuracy and precision in whatever I do. I do believe that I work positively with good communication and interpersonal skills. I am flexible and have the ability to adapt to changing situations while being willing to work beyond normal working hours if necessary. This is a good opportunity to use my talents and abilities to achieve the company's goals and objectives.so I like to join you and show my talent to you",
  // resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Malsha9886", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: " Educational Qulification",
  message:
    "Hi. I am Malsha Kodagoda. I am a third-year student at Sri Jayewardenepura University. My Bachelor of Arts degree in Information and Communication Technology.By the time I graduated, I am very talented computer programming languages ​​such as Java and Python and also completed projects such as mobile application projects. I have already done a few projects.I am a very practical and work-hard person with an amiable disposition and strong cultural values. Istrongly believe in accuracy and precision in whatever I do. I do believe that I work positively with good communication and interpersonal skills. I am flexible and have the ability to adapt to changing situations while being willing to work beyond normal working hours if necessary. This is a good opportunity to use my talents and abilities to achieve the company's goals and objectives.so I like to join you and show my talent to you",
  images: [
    { 
      img: require("../assets/img/dev.png"), 
      label: "Web Developer", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/design.png"), 
      label: "Creative Designer", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/video.png"), 
      label: "Video Editor", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/mobile.png"), 
      label: "Mobile Application Developer", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/grapic.png"), 
      label: "Grapic Designer", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 50 },
    { name: "Data Structures", value: 75 },
    { name: "C/C++", value: 55 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 80 },
    { name: "C#", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time UI/UX Designer or Front-End Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "isharim6@gamil.com",
};

const experiences = {
  show: true,
  heading: "Work Experiences",
  data: [
    {
      role: 'Associate Image Processing',// Here Add Company Name
      companylogo: require('../assets/img/images.png'),
      date: 'octomber 2018 – March 2020',
    },
    {
      // role: 'Front-End Developer',
      // companylogo: require('../assets/img/boeing.png'),
      date: ' I am also talented Desing and development web sites.i also use in MERN structure for this task.And i have konweladge about HTML,CSS,and JavaScript.but I am very interrest React.My Bachelor of Arts degree in Information and Communication Technology.By the time I graduated, I am very talented computer programming languages ​​such as Java and Python and also completed projects such as mobile application projects.',
    },


  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
