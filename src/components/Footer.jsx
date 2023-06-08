import { socialMedia } from '../constants';

const Footer = () => (
  <footer className="flex justify-between items-center w-full h-[80px] mt-[80px] border-t border-t-dimWhite">
    <p className="text-dimWhite text-[18px]">2023 CodeDreamer All Rights Reserved.</p>

    <div className="flex gap-8">
      { socialMedia.map( media => (
        <a
          key={ media.id }
          href={ media.link }
          rel="noreferrer"
          target="_blank" 
          className="w-[24px] h-[24px]"
        >
          <img src={ media.icon } alt={ media.name } className="w-full h-full object-contain" />
        </a>
      ) ) }
    </div>
  </footer>
);

export default Footer;