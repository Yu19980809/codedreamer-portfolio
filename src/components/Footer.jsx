// import { socialMedia } from '../constants';
import { styles } from '../styles';

const Footer = () => (
  <footer className={ `${ styles.paddingX }` }>
    <div className="flex justify-between items-center w-full h-[80px] mt-[80px] border-t border-t-dimWhite text-dimWhite">
      <p className="md:text-base text-xs">2023 CodeDreamer All Rights Reserved.</p>

      <div className="flex gap-6">
        {/* { socialMedia.map( media => (
          <a
            key={ media.id }
            href={ media.link }
            rel="noreferrer"
            target="_blank"
            className={ `iconfont md:text-[18px] text-[16px] ${ media.fontClass }` }
          />
        ) ) } */}
      </div>
    </div>
  </footer>
);

export default Footer;
