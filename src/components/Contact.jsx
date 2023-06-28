import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { contactInfo } from "../constants";
import { styles } from '../styles';

const InfoItem = ( { icon, name, value } ) => (
  <div className="flex flex-col items-center">
    <div className="relative flex justify-center items-center w-[48px] h-[48px]">
      <span alt={ `icon of ${ name }` } className={ `iconfont ${ icon } text-primary md:text-[32px] text-[24px]` } />
      <span className="absolute inset-0 z-0 bg-primary rounded-full opacity-50 blur-lg" />
    </div>
    <p className="mt-2 px-4 text-white text-[18px] font-bold">{ name }</p>
    <p className="word-wrap px-4 text-dimWhite text-[14px] text-center">{ value }</p>
  </div>
);

const Contact = () => {
  const [ form, setForm ] = useState( { name: '', email: '', message: '' } );
  const [ submitting, setSubmitting ] = useState( false );

  const handleChange = e => setForm( { ...form, [ e.target.name ]: e.target.value } );

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setSubmitting( true );
      if ( !form.name || !form.email || !form.message ) return toast( 'Please complete all the form fileds' );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'CodeDreamer',
          from_email: form.email,
          to_email: 'guangxinyu1998@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setForm( { name: '', email: '', message: '' } );
      toast.success( 'Sending email succeeded' );
    } catch (error) {
      toast.error( 'Ahh, something went wrong. Please try again' );
    } finally {
      setSubmitting( false );
    }
  }

  return (
    <section id="Contact" className={ `${styles.section} w-full` }>
      <div className="flex md:flex-row flex-col-reverse justify-between items-center w-full min-h-[600px] md:px-0 px-[30px] md:py-[40px] py-[20px] bg-black-gradient rounded-[16px]">
        {/* info part */}
        <div className="flex md:flex-col flex-row justify-around md:gap-12 md:w-1/4 w-full md:mt-0 mt-[20px] md:pt-0 pt-[20px] md:border-r md:border-r-white md:border-t-0 border-t border-t-white">
          { contactInfo.map( info => (
            <InfoItem key={ info.name } { ...info } />
          ) ) }
        </div>

        {/* form part */}
        <div className="md:w-3/4 w-full md:px-[100px]">
          <div>
            <h2 className="text-white md:text-[48px] text-[40px] font-bold">Send us a message</h2>
            <p className="text-dimWhite text-[16px]">If you are interested in working with us or have any suggestions, you can send us a message from here. We’d love to hear from you.</p>
          </div>

          <form onSubmit={ handleSubmit } className="mt-[20px]">
            <input
              type="text"
              name="name"
              value={ form.name }
              placeholder="Enter your name"
              onChange = { handleChange }
              className="w-full h-[60px] px-8 py-2 rounded-[12px] outline-none focus:outline-primary"
              required
            />

            <input
              type="email"
              name="email"
              value={ form.email }
              placeholder="Enter your email"
              onChange = { handleChange }
              className="w-full h-[60px] mt-[12px] px-8 py-2 rounded-[12px] outline-none focus:outline-primary"
              required
            />

            <textarea
              name="message"
              rows="10"
              value={ form.message }
              placeholder="Enter your message"
              onChange = { handleChange }
              className="w-full h-[120px] mt-[12px] px-8 py-2 rounded-[12px] outline-none focus:outline-primary"
              required
            />

            <button
              type="submit"
              disabled={ submitting }
              className="mt-[12px] px-8 py-2 text-gray-900 text-[18px] font-semibold bg-primary rounded-[12px] disabled:opacity-75"
            >
              { submitting ? 'Submitting...' : 'Contact Us' }
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
