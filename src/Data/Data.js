import {CiDumbbell} from "react-icons/ci"
import {BsHeartPulse} from "react-icons/bs"
import {BiSolidBullseye} from "react-icons/bi"
import {AiOutlineArrowRight} from "react-icons/ai"
import {BiBulb} from "react-icons/bi"

import img1 from "../assets/dummy.jpg"
import img2 from "../assets/dummy.jpg"
import img3 from "../assets/dummy.jpg"
import img4 from "../assets/dummy.jpg"
import img5 from "../assets/dummy.jpg"

import img6 from "../assets/dummy.jpg"
import img7 from "../assets/dummy.jpg"
import img8 from "../assets/dummy.jpg"

import img9 from "../assets/dummy.jpg"
import img10 from "../assets/dummy.jpg"
import pillar from "../assets/pillar.png"
import who from "../assets/who.jpeg"
import whoare from "../assets/whoare.jpg"



export const navLinks = [
    {label:"Home",href:"#home"},
    {label:"About",href:"#about"},
    {label:"Services",href:"#services"},
    {label:"Schedule",href:"#schedule"},
    {label:"Gallery",href:"#gallery"},
    {label:"Blog",href:"#blog"},
    {label:"Contact",href:"#contact"}
]

export const services = [
    {
        icon:<CiDumbbell />,
        label:"QUALITY EQUIPMENT",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BsHeartPulse />,
        label:"HEALTH CARING",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BiSolidBullseye />,
        label:"GYM STRATEGIES",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    }
]
export const visionAndMission = [
    {
      icon:<BiBulb />,
      label: "Our Vision",
      desc: `QES vision is to be a leading local service company providing 
  cementing, new technologies, and other related services to oil and gas operators in Oman by consistently achieving targets beyond expectations. 
  In addition, to develop processes, standards, and management systems to ensure consistency in service delivery and wellbeing for our employees and supply well integrity packages to the customers/suppliers.`,
    },
    {
      icon:<BiSolidBullseye />,
      label: "Our Mission",
      desc: `Our mission is to invest, develop, build and spend from Oman 
  and in Oman, in order to lead in-country value. In addition, achieving customer objectives with zero NPT, zero HSE, and zero SQ issues. 
  
  QES is committed to supporting local universities by providing yearly internships for their students and projects. Also providing cementing technical training to clients. 
  QES has the capability of performing independently in diagnostic and post-job testing for customers.`,
    },
  ]  


export const client = [
    {
        id:1,
        desc:'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
        img:img1,
        clientName:"Butler"
    },
    {
        id:2,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, magnam eos optio laboriosam quaerat voluptates! Inventore molestiae voluptatibus repudiandae quos blanditiis, soluta ratione? Totam quos voluptas a laborum exercitationem",
        img:img2,
        clientName:"Chiris Harris"
    },
    {
        id:3,
        desc:'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
        img:img3,
        clientName:"Martin"
    },
    {
        id:4,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, magnam eos optio laboriosam quaerat voluptates! Inventore molestiae voluptatibus repudiandae quos blanditiis, soluta ratione? Totam quos voluptas a laborum exercitationem",
        img:img4,
        clientName:"Thomos"
    },
    {
        id:5,
        desc:'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
        img:img5,
        clientName:"Dravid"
    }
]
export const whowe = [
    {
        id:1,
        head : "Who are We",
        desc:'Qurum Enterprise Oil & Gas Services (QES), founded in 2012 by visionary Omani leaders, specializes in cementing operations with international standards. Focused on performance, quality, and innovation, QES leverages local expertise to build strategic partnerships. Safety is a core value, ensuring the well-being of people and the environment through 24/7 commitment to best practices.',
        img:whoare,
    },
    {
        id:2,
        head : "QES Pillars",
        desc:"QES believes the success is build based on its proper management, experienced people and right technology",
        img:pillar,
    },
    {
        id:3,
        head : "QES Objectives",
        desc:'QES is committed to developing robust processes, standards, and management systems to ensure consistent service delivery and the well-being of employees, customers, and suppliers. Proudly 100% Omani-owned, with over 95% Omanisation at inception, QES collaborates with local companies rather than competing. The company strives to achieve customer objectives with zero NPT, HSE, or SQ issues and offers independent diagnostic and post-job testing for multiple vendors.',
        img:who,
    }
]

export const teamMembers =[
    {
        img:img6,
        role:"Creative director",
        name:"Jhon Sunsaev"
    },
    {
        img:img7,
        role:"Fitness Trainer",
        name:"Thamlus"
    },
    {
        img:img8,
        role:"Personal Trainer",
        name:"Jason"
    },
]

export const blog = [
    {   img:img9,
        date:"19",
        role:"Creative director",
        desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
    },
    {
        img:img10,
        date:"27",
        role:"Creative director",
        desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
    }
]

export const footer = [
    {
        title:"COMPANY",
        footerLinks:[  
            {link:"About Us"},
            {link:"Company"},
            {link:"Press & Blog"},
            {link:"Privacy Policy"}
        ]
    },
    {
        title:"OPEN HOUR",
        footerLinks:[
            {link:"Monday 11am-7pm"},
            {link:"Tuesday-Friday 11am-8pm"},
            {link:"Saturday 10am-6pm"},
            {link:"Sunday 11am-6pm"}
        ]
    },
    {
        title:"RESOURCES",
        footerLinks:[
            {link:"Home Insurance"},
            {link:"Travel Insurance"},
            {link:"Car Insurance"},
            {link:"Business Insurance"},
            {link:"Heal Insurance"}
        ]
    }
]