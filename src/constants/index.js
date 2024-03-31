import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
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
} from "../assets";

import sineducation from '../assets/sineducation.png';
import tsdc from '../assets/tsdc.png';
import dhando from '../assets/dhando.png';

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [sineducation, tsdc , dhando];

export const brainwaveServices = [
  "Notes + Image Generation",
  "Summery Generation",
  "Flowcharts and Learning Maps Generation"
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the model to understand and respond based on the speech and voice, making it easier for users learn and take report and minutes of the meetings.",
    date: "March 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Flowchart Creation",
    text: "Add Flowcharts and mindmaps, of important topics and key points discussed during the lecture, to help users to learn at a faster phase.",
    date: "March 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Flashcard Generation",
    text: "Let AI Generate Flashcards to remember notes and summery of the lessions easily.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "AI can access the other API and extensions to generate notes in notion format directly.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "V X",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Pdf Generation",
      "Flowchart and Flashcard Generations.",
      "Seamless Integration and Extensions to boost productivtiy.",
    ],
  },
  {
    id: "1",
    title: "V Xi",
    description: "AI chatbot advanced",
    price: "15",
    features: [
      "AI Voice to notes conversion with Image generation",
      "Pdf Generation",
      "Flowchart and Flashcard Generations.",
      "Seamless Integration and Extensions to boost productivtiy.",
    ],
  },
];

export const  benefits = [
  {
    id: "0",
    title: "Summerized Notes",
    text: "Lets users quickly summerize the learnings and references taught in class.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Integrations",
    text: "Connect your model across different platforms and boost productivity and referenced based learnings.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Our model also poses the feature of fast responding as well.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "Flowchart and Image generation",
    text: "Flowcharts and Image generation using generative pretrained transformer help to understand topics in an precise way possible.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage5,
  },
  {
    id: "5",
    title: "DocTalk Conversation",
    text: "The app can do conversation with the notes and documents in a click and with high accuracy.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage6,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
