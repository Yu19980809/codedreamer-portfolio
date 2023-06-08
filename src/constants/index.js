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

export {
  contactInfo,
  socialMedia
};
