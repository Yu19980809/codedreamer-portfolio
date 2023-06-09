import { address, phone, mail, chat, email } from '../assets';

const contactInfo = [
  { icon: address, name: 'Address', value: "Jing'an Shanghai" },
  { icon: phone, name: 'Phone', value: '+86 15172765447' },
  { icon: mail, name: 'email', value: 'codedreamer@gmail.com' }
];

const socialMedia = [
  { id: 'social-media-1', name: 'chat', icon: chat, link: 'javascript:;' },
  { id: 'social-media-2', name: 'email', icon: email, link: 'javascript:;' }
];


const services = [
  {
    image: "/src/assets/react.svg",
    title: "Digital Consulting",
    content: " Find a 100% matched  digital solution for your needs."
  },
  {
    image: "/src/assets/react.svg",
    title: "Product design",
    content: "UI design"
  },
  {
    image: "/src/assets/react.svg",
    title: "Custom developement",
    content: "mobile friendly"
  },
  {
    image: "/src/assets/react.svg",
    title: "Wechat Mini-Program",
    content: "The express way to bring your business into China market"
  }

];

export {
  contactInfo,
  socialMedia,
  services
};
