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


const services = {
  header: "Customize your business",
  services: [
    {
      // image: "/react.svg",
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Services/1.gif",
      title: "Digital Consulting",
      content: " Find a 100% matched  digital solution for your needs."
    },
    {
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Services/2.gif",
      title: "Product design",
      content: "UI design"
    },
    {
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Services/3.gif",
      title: "Custom developement",
      content: "mobile friendly"
    },
    {
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Services/4.gif",
      title: "Wechat Mini-Program",
      content: "The express way to bring your business into China market"
    }
  ]
};
const about = {
  avatar: [{
    name: "Zora",
    video: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/About/Zora.mov",
  },{
    name: "Corrine",
    video: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/About/Corrine.mov",
  },{
    name: "Lizzie",
    video: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/About/Lizzie.mov",
  },{
    name: "Guangxin",
    video: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/About/Guangxin.mov",
  }]
}
export {
  contactInfo,
  socialMedia,
  services,
  about
};
