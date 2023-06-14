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
    image: "/vite.svg",
    title: "Digital Consulting",
    content: " Find a 100% matched  digital solution for your needs."
  },
  {
    image: "/react.svg",
    title: "Product design",
    content: "UI design"
  },
  {
    image: "/vite.svg",
    title: "Custom developement",
    content: "mobile friendly"
  },
  {
    image: "/react.svg",
    title: "Wechat Mini-Program",
    content: "The express way to bring your business into China market"
  }

];

const works = [
  {
    name: 'Hobos',
    description: 'Hobos',
    image: Hobos,
    tags: [
      { name: 'Wechat Mini-Program' },
      { name: 'Community' },
    ]
  },

  {
    name: 'Triptrip',
    description: 'A Wechat mini program designed to help local trip organizers post events, manage groups'
  }
]

export {
  contactInfo,
  socialMedia,
  services,
  works
};
