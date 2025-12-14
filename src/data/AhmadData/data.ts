import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const ahmadImage = "/assets/Images/ahmadImage.jpeg"
const ahmadName = "Ahmad Usman"
const ahmadShortName = "Ahmad"
const ahmadBio = "Software Developer"
const ahmadAbout = `
  <p>
    Hey! I'm Ahmad Usman, a software developer with 1 years in full-stack experience. I love building scalable applications that solve real-world problems.
  </p>
  <p>
    I primarily work with Node.js for backend development, On the frontend, I work with React and Next.js.
  </p>
 
`

const ahmadLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/apo_bozdag",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Github",
    link: "https://https://github.com/uniqueahmerd",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/ahmad-usman-dev",
    icon: FaLinkedinIn,
  },
]



const ahmadContact =
  "Feel free to reach out to me via email for any inquiries, collaboration opportunities, or just to say hi!"
const ahmadContactLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/apo_bozdag",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:ahmadusman1809@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 3,
    name: "Github",
    link: "https://https://github.com/uniqueahmerd",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/ahmad-usman-dev",
    icon: FaLinkedinIn,
  },
]

const ahmadFooterLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/apo_bozdag",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Mail",
    link: "mailto:ahmadusman1809@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 3,
    name: "Github",
    link: "https://https://github.com/uniqueahmerd",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/ahmad-usman-dev",
    icon: FaLinkedinIn,
  },
]

export {
  ahmadImage,
  ahmadBio,
  ahmadContact,
  ahmadContactLink,
  ahmadName,
  ahmadShortName,
  ahmadAbout,
  ahmadLink,
  ahmadFooterLink,
}
