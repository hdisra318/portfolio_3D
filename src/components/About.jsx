import {Tilt} from "react-tilt";
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';


function ServiceCard({title, icon, index}) {
  
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
        
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{max: 45, scale: 1, speed: 450}}>

          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

        </div>

      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a Science Computer Student in the last semesters, I'm 21 years old.
      I am a responsible person who is enthusiastic about learning new things, I make small
      projects using the knowledge acquired throughout my career to practice and prepare for more professionals projects.
      Currently I'm learning web and mobile development and making little projects that I will show you in the other section. 
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");