import { triptrip, oe, hobos } from '../assets/images';
// import { corrine, guangxin, lizzie, zora } from '../assets/images';
import { service1, service2, service3, service4 } from '../assets/images';

// const baseAssetUrl = 'https://codedreamer-portfolio.oss-cn-shanghai.aliyuncs.com/';
const baseAssetUrl = '/src/assets/images/';

const navbarLinks = [
  { name: 'Home' },
  { name: 'Services' },
  { name: 'Works' },
  { name: 'About' },
  { name: 'Contact' }
];

const hero = {
  slogan: "Code the future you dream of"
}

const works = [
  {
    name: 'Hobos',
    qrcode_img: `${baseAssetUrl}/Works/Hobos-QR.jpeg`,
    // image: `${baseAssetUrl}/Works/Hobos-QR.jpeg`,
    image: hobos,
    description: 'A community of underground stand-up comedy lovers in china. You can view and book comedy show and follow clubs and comedians you like.',
    icon: 'icon-xiaochengxu1',
    tags: [
      { name:'WeChat Mini-Program' },
      { name: 'Community' }
    ]
  },
  {
    name: 'Triptrip',
    qrcode_img: `${baseAssetUrl}images/triptrip-QR.jpeg`,
    // image: [
    //   `${baseAssetUrl}/Works/triptrip1.jpg`,
    //   `${baseAssetUrl}/Works/triptrip2.jpg`,
    //   `${baseAssetUrl}/Works/triptrip3.jpg`,
    //   `${baseAssetUrl}/Works/triptrip4.jpg`
    // ],
    image: triptrip,
    description: 'A Wechat mini-program designed to help local trip organizers post events, manage groups, gather and visualize key information.',
    icon: 'icon-kaifarenwu',
    tags: [
      { name:'Wechat Mini-Program' }
    ]
  },
  {
    name: 'OE Biotech',
    // image: [
    //   `${baseAssetUrl}/Works/OE1.jpg`,
    //   `${baseAssetUrl}/Works/OE2.jpg`
    // ],
    image: oe,
    description: 'A dashboard to show all business data, these data from individual modules can be viewed and analyzed, giving users a clearer picture of the business',
    icon: 'icon-wangye',
    tags: [
      { name: 'Admin Panel' },
      { name: 'Interactive Graph' }
    ]
  }
];

const services = {
  header: "Customize your business",
  services: [
    {
      // image: "/react.svg",
      // image: `${baseAssetUrl}/Services/1.gif`,
      image: service1,
      title: "Digital Consulting",
      content: [
        "• Find a 100% matched  digital solution for your needs.",
        "• Digital transformation for traditional enterprises",
        "• Digital Marketing"]
    },
    {
      // image: `${baseAssetUrl}/Services/2.gif`,
      image: service2,
      title: "Product design",
      content: [
        "• User research",
        "• UI design",
        "• User flow design",
        "• Competitor analysis"
      ]
    },
    {
      // image: `${baseAssetUrl}/Services/3.gif`,
      image: service3,
      title: "Custom developement",
      content: [
        "• mobile friendly",
        "• cross-platform",
        "• scalable"
      ]
    },
    {
      // image: `${baseAssetUrl}/Services/4.gif`,
      image: service4,
      title: "Wechat Mini-Program",
      content: [
        "• The express way to bring your business into China market",
        "• WeChat Official Account integration",
      ]
    }
  ]
};

const about = {
  avatar: [{
    name: "Zora",
    // video: `${baseAssetUrl}/About/Zora.mov`,
    video: '/Zora.mov',
  },{
    name: "Corrine",
    // video: `${baseAssetUrl}/About/Corrine.mov`,
    video: '/Corrine.mov',
  },{
    name: "Lizzie",
    // video: `${baseAssetUrl}/About/Lizzie.mov`,
    video: '/Lizzie.mov',
  },{
    name: "Guangxin",
    // video: `${baseAssetUrl}/About/Guangxin.mov`,
    video: '/Guangxin.mov',
  }],
  h1: "Codedreamer is a technology company that brings your digital dreams to life.",
  h2: "Our team of expert developers, designers, and strategists represents diverse backgrounds and experiences, and we work collaboratively to build innovative and customized software solutions."
}

const contactInfo = [
  { icon: 'icon-icoaddrpin', name: 'Address', value: "Jing'an Shanghai" },
  { icon: 'icon-phone-call', name: 'Phone', value: '+86 15172765447' },
  { icon: 'icon-email', name: 'Email', value: 'codedreamer.technology@gmail.com' }
];

const socialMedia = [
  { id: 'social-media-1', name: 'chat', fontClass: 'icon-message', link: 'javascript:;' },
  { id: 'social-media-2', name: 'email', fontClass: 'icon-email', link: 'javascript:;' }
];

export {
  baseAssetUrl,
  navbarLinks,
  hero,
  works,
  services,
  about,
  contactInfo,
  socialMedia,
};
