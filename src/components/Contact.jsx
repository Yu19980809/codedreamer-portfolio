import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo } from "../constants";
import toast from 'react-hot-toast';

const InfoItem = ( { icon, name, value } ) => (
  <div className="flex flex-col items-center">
    <div className="relative flex justify-center items-center w-[48px] h-[48px]">
      <img src={ icon } alt={ `icon of ${ name }` } className="w-[32px] h-[32px] object-contain" />

      <span className="absolute inset-0 z-0 bg-primary rounded-full opacity-50 blur-lg"></span>
    </div>
    <p className="mt-2 text-white text-[18px] font-bold">{ name }</p>
    <p className="text-dimWhite text-[14px]">{ value }</p>
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
    <section className="flex justify-between items-center w-full min-h-[600px] py-[40px] bg-black-gradient rounded-[16px]">
      {/* left info part */}
      <div className="flex flex-col justify-around items-center gap-12 w-1/4 h-full border-r border-r-white">
        { contactInfo.map( info => (
          <InfoItem key={ info.name } { ...info } />
        ) ) }
      </div>

      {/* right form part */}
      <div className="w-3/4 px-[100px]">
        <div>
          <h2 className="text-white text-[48px] font-bold">Send us a message</h2>
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
    </section>
  )
}

export default Contact;