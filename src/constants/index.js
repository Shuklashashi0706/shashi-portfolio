import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  githubBG,
  chromecast,
  disc02,
  discord,
  discordBlack,
  figma,
  file02,
  fiver,
  framer,
  homeSmile,
  instagram,
  notification2,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  upwork,
  github,
  react,
  express,
  node,
  mongodb,
  javascript,
  html,
  css,
  tailwindcss,
  cpp,
  mern,
  python,
  redux,
  mui,
  postman,
  socket,
  threejs,
  firebase,
  linkedin,
} from "../assets";
import Solidity from "../assets/solidity.svg";
import EtherJs from "../assets/etherJs.png"
import Parth from "../assets/Parth.png";

export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#Projects",
  },
  {
    id: "1",
    title: "Works",
    url: "#works",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Resume",
    url: "https://drive.google.com/file/d/1LZceCEktyAyp1yibfRapKib-D3ddaYEC/view?usp=drive_link",
  },
  {
    id: "4",
    title: "Hire Me",
    url: "https://www.linkedin.com/in/shashi-kumar-shukla/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Buy me a coffee",
    url: "https://www.linkedin.com/in/shashi-kumar-shukla/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [Parth, notification2, figma];

export const companyLogos = [Parth, fiver, upwork];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const projects = [
  {
    id: "0",
    title: "DeFlix",
    text: "DeFlix,a decentralized web3 movie reviewing sytem which enables user to post reviews which cannot be modified and deleted providing 100% true reviews to users.Made using MERN stack and Solidity for creating smart contracts and Ethereum as mainnet for deploying smart contracts",
    date: "Sep 2023 - Jun-2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    to: "http://143.244.134.9:5173/",
  },
  {
    id: "1",
    title: "GTMSpace",
    text: "GTMSpace is web3 app for letting users to play games using GTM tokens and earning more GTM tokens.Made using React.js and Tailwind css for creating a user friendly frontend and integrated RainbowKit library for interaction with web3 wallets and used Ether.js for interaction with smart contracts",
    date: "Feb - May 2024",
    status: "done",
    imageUrl: roadmap4,
    to: "https://gtm-space-latest.vercel.app/",
  },
  {
    id: "2",
    title: "Club Manager",
    text: "Brainstorming idea for creating a web app portal for clubs in college (Students can easily look for clubs and their details along with feature to connect with seniors of clubs) during hackathon till making it a real life product with completing nearly all functionalities.",
    date: "June 2023",
    status: "done",
    imageUrl: roadmap2,
    to: "https://club-manager-ashen.vercel.app/",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "MERN Stack",
    icon: mern,
  },
  {
    id: "1",
    title: "TailwindCSS",
    icon: tailwindcss,
  },
  {
    id: "2",
    title: "C++",
    icon: cpp,
  },
  {
    id: "3",
    title: "Python",
    icon: python,
  },
  {
    id: "4",
    title: "Redux/Recoil",
    icon: redux,
  },
  {
    id: "5",
    title: "Firebase",
    icon: firebase,
  },
  {
    id: "6",
    title: "Solidity",
    icon: Solidity,
  },
  {
    id: "7",
    title: "Ethers.js",
    icon: EtherJs,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "react",
    icon: react,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "express",
    icon: express,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "node",
    icon: node,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "javascript",
    icon: javascript,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "html",
    icon: html,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "css",
    icon: css,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "tailwindcss",
    icon: tailwindcss,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "SDE Intern @ Web3Onwards",
    text: 'Building Decentralized movie reviewing web app "DeFlix" using MERN stack and solidity for creating smart contracts and deploying it in Ethereum mainnet... ',
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: githubBG,
  },
  {
    id: "1",
    title: "Backend Dev Intern @ NFThing",
    text: "Worked in backend part to classify the NFT tokens by creating a fine tuning model and using mongodb aggregation ,along with working in working in integration in frontend... ",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: githubBG,
    light: true,
  },
  {
    id: "2",
    title: "Project Intern @HPE,Bangalore",
    text: "Researched about DeepSpeed Zero by Microsoft and created a plugin for supporting Zero offloading to user selected SSD",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: github,
    imageUrl: githubBG,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discordapp.com/users/shashi9080_",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/almamatters07",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/__shukla__03/",
  },
  {
    id: "4",
    title: "inkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/shashi-kumar-shukla/",
  },
];
