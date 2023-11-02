import React, { Component, useState } from 'react'
import './Footer.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer() {

  const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
};

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      backgroundColor: '#FFFFFF'
    },
  };
  
  Modal.setAppElement('#root');
  
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#000000';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
  return (
    <div>
      <div id="footer" className="footer">
          <h4 className='footer-text'>Irina Saim copyright 2023</h4>
            <button className='modal-buttonContact' onClick={openModal}>Contact us</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Send us a message</h2>
              <form>
              <div id="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your email address" />
            <textarea placeholder="Your message here"></textarea>
            <button>Send</button>
            <span>Thank you for your message, we will be in touch in no time!</span>
        </div>
    
              </form>
              <button onClick={closeModal} className="sendMessage">Send</button>
            </Modal>

        <div className="socialicons">
          <a href="https://www.youtube.com" target="_blank" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/irina-saim" target="_blank" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/itsmeiri" target="_blank" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
      );
}

export default Footer
