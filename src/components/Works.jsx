/* eslint-disable no-unused-vars */
import { works } from '../constants';

const ProjectCard = ( { name, image, description, qrcode_img, tags }) => (
  <div>{ name }</div>
);

const Works = () => {
  return (
    <div className="flex justify-between items-center">

      {/* left cards */}
      <div className='flex flex-3 flex-col justify-start'>
        { works.map( ( work, index )  => (
          <ProjectCard
            key={ `project-card-${ index }` }
            { ...work }
          />
        ))}
      </div>

      {/* right image card */}
      <div className="flex flex-7 ml - [30px]"></div>

    </div>
  )


}

export default Works
