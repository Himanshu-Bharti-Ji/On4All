import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import { IoHome, IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaInfo } from "react-icons/fa";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"On4All | Contact Us"} />
      <BreadCrumb title="Contact Us" />

      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8734.379959402619!2d77.32802114926513!3d28.60469596733939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4dd937112fd%3A0xc4ee372b43438d82!2sKondli%2C%20New%20Delhi%2C%20110096!5e0!3m2!1sen!2sin!4v1708116827105!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="col-12 mt-5 ">
            <div className="contact-form-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4 ">Contact</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control' placeholder='Name' />
                  </div>
                  <div>
                    <input type="email" className='form-control' placeholder='Email' />
                  </div>
                  <div>
                    <input type="tel" className='form-control' placeholder='Phone Number' />
                  </div>
                  <div>
                    <textarea className='w-100 form-control ' name="" id="" cols="30" rows="5" placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className="button border-0 ">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4 ">Get in touch with us</h3>
                <div>
                  <ul>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <IoHome className='fs-5' />
                      <address className="mb-0">H No : F - 110 Kondli, Delhi 110096</address>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <IoCall className='fs-5' />
                      <a href="tel:+91 8447767283">+91 8447767283</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <TbMailFilled className='fs-5' />
                      <a href="mailto:himanshubhartisoe@gmail.com">himanshubhartisoe@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <FaInfo className='fs-5' />
                      <p className="mb-0">Monday to Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>


    </>
  )
}

export default Contact
