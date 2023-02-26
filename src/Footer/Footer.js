import React, { Component } from 'react'
import './Footer.css';
import Modal from 'react-modal';

function Footer() {

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
                <textarea className='textArea'></textarea>
              </form>
              <button onClick={closeModal} className="sendMessage">Send</button>
            </Modal>
        </div>
      );
}

export default Footer
