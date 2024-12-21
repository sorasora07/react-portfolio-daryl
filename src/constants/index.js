import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

export const HERO_CONTENT = `
I'm an aspiring Security Analyst with the mission of keeping everything in the online world, creating secure yet efficient approaches in the workplace, mitigating cyber threats and evaluating network security, and maintaining a safe network environment for employees and businesses to rely on. A Computer Engineering graduate, I ventured into the world of Cybersecurity with the interest of staying secure in the online world and learning the process of security in systems. I am also a part-time Front-End Web Developer`;

export const ABOUT_TEXT = `I am a fresh college graduate who aims to become a Cybersecurity Expert. As I am currently looking for experience, it is my goal to constantly learn to adapt to the ever evolving Cybersecurity and Network Landscape. With 3 months of training and constant learning, I have built my path to reach the basics of Security Analysis. I would also like to add my experience with regards to Front-End Web Development. As both Web Development and Cybersecurity have some sort of relation, I want to further enhance my skills and become proficient in my profession`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Junior Security Analyst | Front End Web Developer",
    description: `Ventured into the field of Cybersecurity as a fresh start in another path to fill in my skillsets. Thanks to Coursera, I am able to learn more about penetration testing and more ways of ethical hacking to maintain system security and integrity as well as mitigation of security breaches in minimizing damages. I also kept my front-end web development skills and will eventually become a full-stack web developer as a side skill.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023",
    role: "Project Management Leader",
    description: `Led a team in my friend group to create a project dedicated for a cake shop in Arayat, Pampanga allowing users to order cakes via the website and process the payment within the website while the admin can manage the orders and process deliveries.`,
    technologies: ["Javascript", "React.js", "PHP", "mongoDB"],
  },
  {
    year: "2022",
    role: "Junior Front End Web Developer",
    description: `Created a business profile in fulfillment of a course requirement in Web Development, Said business profile is a variety store offering general merchandise including cleaning products located in Sta. Ana, Pampanga`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Business Profile",
    image: project1,
    description:
      "A Business Profile project dedicated to the business owner of the AD Rivera Variety Store to showcase their entrepreneurship work and services",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Cake Shop Web Application",
    image: project2,
    description:
      "A web-application project dedicated to the business owner of Baked Goodies by H, a course requirement fullfillment.",
    technologies: ["React", "Next.js", "MongoDB", "Node.js"],
  },
];

export const CONTACT = {
  address: "#35 Martin St., San Joaquin, Sta. Ana, Pampanga, 2022",
  phoneNo: "+63 949 688 4579",
  email: "darylashleyasiadobalatbat@gmail.com",
};
