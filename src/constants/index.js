const navbarLinks = [
  { name: 'Home' },
  { name: 'Services' },
  { name: 'About' },
  { name: 'Works' },
  { name: 'Contact' }
];

const contactInfo = [
  { icon: 'icon-icoaddrpin', name: 'Address', value: "Jing'an Shanghai" },
  { icon: 'icon-phone-call', name: 'Phone', value: '+86 15172765447' },
  { icon: 'icon-email', name: 'email', value: 'codedreamer@gmail.com' }
];

const socialMedia = [
  { id: 'social-media-1', name: 'chat', fontClass: 'icon-message', link: 'javascript:;' },
  { id: 'social-media-2', name: 'email', fontClass: 'icon-email', link: 'javascript:;' }
];

const works = {
  works: [

    //image

    {
      name: 'Hobos',
      qrcode_img:'/src/assets/images/Hobos-QR.jpeg',
      image:'/src/assets/images/Hobos-QR.jpeg',
      description: 'A Wechat mini-program designed to organize open-mic commedian show.',
      tags: [
        { name:'WeChat Mini-Program' },
        { name: 'Community' }
      ]
    },

    {
      name: 'Triptrip',
      qrcode_img: '/src/assets/images/triptrip-QR.jpeg',
      image: [
        '/src/assets/images/triptrip1.png',
        '/src/assets/images/triptrip2.png',
        '/src/assets/images/triptrip3.png',
        '/src/assets/images/triptrip4.png'
      ],
      description: 'A Wechat mini-program designed to help local trip organizers post events, manage groups, gather and visualize key information.',
      tags: [
        { name:'Wechat Mini-Program' }
      ]
    },

    {
      name: 'OE Biotech',
      image: [
        '/src/assets/images/OE1.jpg',
        '/src/assets/images/OE2.jpg'
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
  works,
  services,
  about,
  navbarLinks
};
