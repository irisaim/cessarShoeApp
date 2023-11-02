import React, { useState, useRef, useEffect } from 'react'
import { BsFillInfoCircleFill, BsLayoutThreeColumns } from "react-icons/bs";
import Modal from 'react-modal';
import { Collapse } from 'antd';
const {Panel} = Collapse

function Faq() {
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
    const [active, setActive] = useState(false);

    const contentRef = useRef(null);
  
    useEffect(() => {
      contentRef.current.style.maxHeight = active
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }, [contentRef, active]);
  
    const toggleAccordion = () => {
      setActive(!active);
    };
    return (
      <>
        <div className="App">
          <div>
            <button
              className={`question-section ${active}`}
              onClick={toggleAccordion}
            >
              <div>
                <div className="question-align">
                  <h4 className="question-style">
                   Return and refund  
                  <BsFillInfoCircleFill style={{marginLeft :'6px'}}
                    className={active ? `question-icon rotate` : `question-icon`}
                  />
                   </h4>
                </div>
                <div
                  ref={contentRef}
                  className={active ? `answer answer-divider` : `answer`}
                >
                  <p>You can return the order back to us in max 30 days and you'll receive your money back 100% !</p>
                  
                  <button onClick={openModal}>FAQ section</button>
                  <Modal 
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal} 
              >
              <div className='block faqPage'>
            <div className='container'>
                <h1>FAQ</h1>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="What is the return policy?" key="1">
                        <p>When you choose to adopt a stray animal, you’re making a life-changing impact on that animal’s life. The world faces significant stray animal issues, with millions of homeless animals around the globe. By adopting, you’re directly contributing to reducing this number, providing an animal with a chance for a new beginning, and battling the global problem of animal homelessness.</p>
                    </Panel>
                    <Panel header="TWhat are the shipping options?" key="2">
                        <p>When you choose to adopt a stray animal, you’re making a life-changing impact on that animal’s life. The world faces significant stray animal issues, with millions of homeless animals around the globe. By adopting, you’re directly contributing to reducing this number, providing an animal with a chance for a new beginning, and battling the global problem of animal homelessness.</p>
                    </Panel>
                    <Panel header="What should I do if I never received my order?" key="3">
                        <p>When you choose to adopt a stray animal, you’re making a life-changing impact on that animal’s life. The world faces significant stray animal issues, with millions of homeless animals around the globe. By adopting, you’re directly contributing to reducing this number, providing an animal with a chance for a new beginning, and battling the global problem of animal homelessness.</p>
                    </Panel>
                    <Panel header="When will I receive my order?" key="4">
                        <p>When you choose to adopt a stray animal, you’re making a life-changing impact on that animal’s life. The world faces significant stray animal issues, with millions of homeless animals around the globe. By adopting, you’re directly contributing to reducing this number, providing an animal with a chance for a new beginning, and battling the global problem of animal homelessness.</p>
                    </Panel>
                    <Panel header="Can I make changes to an order I already placed?" key="5">
                        <p>When you choose to adopt a stray animal, you’re making a life-changing impact on that animal’s life. The world faces significant stray animal issues, with millions of homeless animals around the globe. By adopting, you’re directly contributing to reducing this number, providing an animal with a chance for a new beginning, and battling the global problem of animal homelessness.</p>
                    </Panel>
                    <Panel header="Where is my refund?" key="6">
                        <p>When you choose to adopt a stray animal, you’re making a life-changing impact on that animal’s life. The world faces significant stray animal issues, with millions of homeless animals around the globe. By adopting, you’re directly contributing to reducing this number, providing an animal with a chance for a new beginning, and battling the global problem of animal homelessness.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
        </Modal>
                </div>
              </div>
            </button>
          </div>
        </div>
      </>
    );
    }
    export default Faq
