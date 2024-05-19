import self from "../img/self.png"
import oliverposfotor from "../img/oliverpos1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sushma",
    lastName: "Sahu",
    initials: "ss", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Software Engineer at CIVICA"
        },
        {
            emoji: "📧",
            text: "sushmasahu9713@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/whodilawar",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/sushma-sahu-266b4b160",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Sushma. I'm a software engineer at CIVICA. boasts a robust computer background and a fervent dedication to acquiring technical skills. With three years of experience in the IT industry, and excels as a full stack developer within my current role. Throughout my journey, i have navigated diverse domains and multiple projects, overcoming numerous challenges. i am enthusiasm for tackling new challenges and embracing exciting work underscores my unwavering commitment to professional growth and excellence.",
    skills:
        {
            proficientWith: ['Asp.net mvc', '.Net core','C#','Angular','.Net web api','Angular Unit testing','.Net unit testing','Javascript', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma','manual testing','api intregation','Ajax','Jquery','Azure Dev','C , C++','java , ad Java'],
            exposedTo: ['React js','Reat Native','TypeScript'],
            Database:['Sql Server','Mongodb','RDBMS','Entity Framework'],
            softSkill:['Interpersonal skill','Communication skill','Innovative','Quick Adaptability','Problem Solving Ability']
        }
    ,
    hobbies: [
        {
            label: 'Listening Music',
            emoji: '🎺'
        },
        {
            label: 'Dance',
            emoji: '💃'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Learning Always New Things',
            emoji: '📚🧠🌱'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Oliver POS",
            live: "https://sell.oliverpos.com/login", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: oliverposfotor,
            aboutProject:"https://www.oliverpos.com/"
        },
        {
            title: "Oliver POS Supper admin",
            live: "https://whodilawar.github.io/portfolio",
            source: "https://github.com/whodilawar",
            image: mock2,
            aboutProject:"https://github.com/whodilawar"
        },
        {
            title: "Todo List",
            live: "https://whodilawar.github.io/portfolio",
            source: "https://github.com/whodilawar",
            image: mock3,
            aboutProject:"https://github.com/whodilawar"
        },
        {
            title: "Project 4",
            live: "https://whodilawar.github.io/portfolio",
            source: "https://github.com/whodilawar",
            image: mock4,
            aboutProject:"https://github.com/whodilawar"
        },
        {
            title: "Project 5",
            live: "https://whodilawar.github.io/portfolio",
            source: "https://github.com/whodilawar",
            image: mock5,
            aboutProject:"https://github.com/whodilawar"
        }
    ]
}