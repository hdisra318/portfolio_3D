import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {

  const [formulario, setFormulario] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef();

  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    
    const {name, value} = e.target;
    setFormulario({...formulario, [name]: value})

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    setCargando(true);

    emailjs.send('service_9dhyumv', 'template_63o06eq',
      {
        from_name: formulario.name,
        to_name: 'Israel',
        from_email: formulario.email,
        to_email: 'hdisra318@ciencias.unam.mx',
        message: formulario.message,
      },
      'P27s1UpgmV8EqPh22'
      ).then(() => {
        setCargando(false);
        alert("Thank you. I will contact you as soon as possible.");
        setFormulario({
          name: '',
          email: '',
          message: '',
        })

      }, (error) => {
        setCargando(false);
        console.log(error);
        alert('Something went wrong');
      })
  }


  return (

    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn('up', "tween", 0.2, 1)} 
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
              type="text" 
              name='name' 
              value={formulario.name}
              onChange={handleChange}
              placeholder="Write your name"
              className='py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium shadow-primary shadow-md' />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input 
              type="email" 
              name='email' 
              value={formulario.email}
              onChange={handleChange}
              placeholder="Write your email"
              className='py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium shadow-primary shadow-md' />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Write me a message</span>
            <textarea 
              rows="7"
              name='message' 
              value={formulario.message}
              onChange={handleChange}
              placeholder="Your message"
              className='py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium shadow-primary shadow-md' />
          </label>

          <button type='submit' className='font-bold bg-tertiary py-3 text-white px-8 outline-none
            w-fit shadow-primary rounded-xl shadow-xl'>
            {cargando ? 'Sending...' : 'Send'}
          </button>

        </form>

      </motion.div>

      {/* Earth */}
      <motion.div variants={slideIn("down", 'tween', 0.2, 1)}
        className="flex xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>

    </div>

  )
}

export default SectionWrapper(Contact, "contact");