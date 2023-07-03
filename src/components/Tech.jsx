import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    
    <section className="flex flex-col flex-wrap justify-center gap-10">
      <h2 className={`mx-2 flex justify-center ${styles.sectionHeadText} `}>Technologies and &nbsp;
      <span className="text-[#915eff]"> Languages</span></h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div key={tech.name} className="w-28 h-28">
            <BallCanvas icon={tech.icon}/>
          </div>
        ))}
      </div>
    </section>
  
  )
}

export default SectionWrapper(Tech, '');