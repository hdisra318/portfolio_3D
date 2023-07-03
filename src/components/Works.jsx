import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


function ProjectCard({index, name, description, image, source_code_link}) {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" >
        <div className="relative w-full h-[230px]">
          
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} 
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" />
            </div>
            
            {/* Para descargar el APK en apps */}
            {/*}
            <div onClick={() => window.open(source_code_link, "_blank")} 
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" />
            </div> */}

          </div>

        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>

      </Tilt>
    </motion.div>
  );
}

const Works = () => {

  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h4 className={styles.sectionHeadText}>Projects</h4>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl">
            These are some of my projects that I have made along my career.
            It reflects my skills and my knowledge with different technologies.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  )

}

export default SectionWrapper(Works, '');