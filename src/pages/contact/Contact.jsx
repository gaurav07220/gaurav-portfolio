import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import contact_img from '../../assets/contact.webp'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  const [msgText, setMsgText] = useState(false);
  const [msgBtn, setMsgBtn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsgBtn(true)

    emailjs
      .send('service_t64bf1c', 'template_vtz5t5i', formData, 'TTcEtrdpZhs67ADvg')
      .then(
        (response) => {
          console.log(response)
          setMsgText(true);
          setMsgBtn(false)
          setFormData(
            {
              name: '',
              email: '',
              message: '',
            }
          )

          setTimeout(() => {
            setMsgText(false);
          }, 3000)
        },
        (error) => {
          console.log(error)
          setMsgText('Email sending failed');
          setMsgBtn(false)
          setTimeout(() => {
            setMsgText(false)
          }, 3000)
        }
      );
  };

  return (
    <div className="container" data-aos="fade-right">

      <div className="contact-us">
        <div className="contact-img">
          <img src={contact_img} alt="" />
        </div>
        <form onSubmit={handleSubmit} className='form'>
          <h2>Contact Me</h2>
          <div className="name">
            <TextField id="standard-basic" type='text' name='name' label="Full Name" variant="standard" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="email">
            <TextField id="standard-basic" type='email' name='email' label="E-mail" variant="standard" value={formData.email} onChange={handleChange} required />

          </div>

          <div className="msg">
            <TextField id="standard-basic" type='text' name='message' value={formData.message}
              onChange={handleChange} label="Message..." variant="standard" />
          </div>

          <div className="submit">
            <Button variant="contained" type='submit' endIcon={msgBtn ? "" : <SendIcon />}>
              {msgBtn ? "Please wait..." : "Send"}
            </Button>
          </div>
          <div className="msg-form">

            <Alert variant="filled" severity="success" className={msgText ? 'd-inline-flex' : 'd-none'}>
              Your message has been sent successfully
            </Alert>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Contact;
