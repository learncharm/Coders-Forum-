import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';


export default function Home() {

  

  

  return (
    <>
    <NavBar/>
    <div>
      <div className="container my-3">
        
        <section className="categories text-center">
          <h3>Categories</h3>
          <hr />
        </section>
          <CategoryCard />
        <hr />
        <section className='feedback mt-3'>
        <h2 className='text-center' id="feedback">Feedback</h2>
            <p className='my-2 text-center'>Give Your Feedback</p>
        <div className='add-thread'><form method='POST'  className='add-thread-form' >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" name="title"  className="form-control " id="title" aria-describedby="emailHelp" minLength={5} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
              <input type="email"  name="description" className="form-control" id="description" minLength={6} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
              <textarea name="message" id="" className='form-control' cols="20" rows="7"></textarea>
            </div>
            <button type="submit" className="btn btn-primary thread-btn">Send Feedback</button>
            {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
          </form></div>
      </section>
      <Footer/>
      </div>


    </div>
    </>
  )
}
