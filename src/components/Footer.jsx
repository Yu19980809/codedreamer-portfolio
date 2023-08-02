// import { socialMedia } from '../constants';

const Footer = () => (
  <footer id="Footer" className="pt-[60px]">
    {/* <div className="flex justify-between items-center w-full h-[80px] mt-[80px] border-t border-t-dimWhite text-dimWhite">
      <p className="md:text-base text-xs">2023 CodeDreamer All Rights Reserved.</p>

      <div className="flex gap-6">
        { socialMedia.map( media => (
          <a
            key={ media.id }
            href={ media.link }
            rel="noreferrer"
            target="_blank"
            className={ `iconfont md:text-[18px] text-[16px] ${ media.fontClass }` }
          />
        ) ) }
      </div>
    </div> */}

    <div className="w-full h-[80px] text-center leading-[80px] border-t border-t-dimWhite text-dimWhite">
      <p className="text-[14px]">2023 CodeDreamer All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
