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

const works = {
  works: [
    {
      //image
      name: 'Hobos',
      image:'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/Hobos-QR.gif',
      description: 'Hobos',
      tags: [
        { name:'WeChat Mini-Program' },
        { name: 'Community' }
      ]
    },

    {
      name: 'Triptrip',
      qrcode_img: 'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/triptrip-QR.gif',
      image: [
        'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/triptrip1.gif',
        'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/triptrip2.gif',
        'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/triptrip3.gif',
        'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/triptrip4.gif'
      ],
      description: 'A Wechat mini-program designed to help local trip organizers post events, manage groups, gather and visualize key information.',
      tags: [
        { name:'Wechat Mini-Program' }
      ]
    },

    {
      name: 'OE Biotech',
      image: [
        'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/OE1.gif',
        'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/Works/OE2.gif'
      ],
      description: 'OE Biotech',
      tags: [
        { name: 'Admin Panel' },
        { name: 'Interactive Graph' }
      ]
    }
  ]
};


const services = {
  header: "Customize your business",
  services: [
    {
      // image: "/react.svg",
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/services/1.gif",
      title: "Digital Consulting",
      content: " Find a 100% matched  digital solution for your needs."
    },
    {
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/services/2.gif",
      title: "Product design",
      content: "UI design"
    },
    {
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/services/3.gif",
      title: "Custom developement",
      content: "mobile friendly"
    },
    {
      image: "https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/services/4.gif",
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
  about,
  works
};
