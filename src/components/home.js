import React,{useRef} from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import emailjs from 'emailjs-com';
import Testimonial from './Testimonial/Testimonial';


export default function Home() {
  
  const formRef = useRef(null);
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_97xcavv', 'template_31ue0o8', formRef.current, 'VeSEtywUosCZstzFy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Form Submitted");
  };
  

  

  return (
    <>
    <NavBar/>
    <div>
      <div className="container">
        
        <section className="categories text-center">
        <h2 className='text-center mt-3' id="feedback">Categories</h2>
          <hr />
        </section>
          <CategoryCard />
        <hr />

        <Testimonial/>
        <section className='feedback mt-3' style={{marginBottom:80}}>
        <h2 className='text-center' id="feedback">Feedback</h2>
            <p className='my-2 text-center'>Give Your Feedback</p>
        <div className='add-thread'><form method='POST' ref={formRef}  className='add-thread-form' onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" name="name"  className="form-control " id="title" aria-describedby="emailHelp" minLength={5} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
              <input type="email" name = "email" className="form-control" id="description" minLength={6} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
              <textarea name="message" id="" className='form-control' cols="20" rows="7"></textarea>
            </div>
            <button type="submit" className="btn btn-primary thread-btn">Send Feedback</button>
            {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
          </form></div>
      </section>
      </div>


    </div>
      <Footer/>
    </>
  )
}
