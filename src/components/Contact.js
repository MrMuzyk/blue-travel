import React, { Component } from 'react';

class Contact extends Component{
    render(){
      return <div className="contact-section">
        <div className="contact-section-content">
          <img src="/images/front-page/contact/mac.png" className="contact-section-content-mac"/>
        <div>
              <h2 className="contact-section-title">Kontakt</h2>
              <ul>
                <li className="contact-section-content-details-item"><img src="/images/front-page/contact/phone.svg" className="contact-section-content-details-item-icon"/><p>+ 48 733 833 171</p></li>
                <li className="contact-section-content-details-item"><img src="/images/front-page/contact/email.svg" className="contact-section-content-details-item-icon"/><p>przybylo.olgierd@gmail.com</p></li>
                <li className="contact-section-content-details-item"><img src="/images/front-page/contact/internet.svg" className="contact-section-content-details-item-icon"/><p>www.bluetravel.com.pl</p></li>
              </ul>
              </div>
            <div className="contact-section-conent-images-container">
              <img src="/images/front-page/contact/plant.png" className="contact-section-content-plant"/>
              <img src="/images/front-page/contact/phone.png" className="contact-section-content-phone  "/>
            </div>
        </div>
      </div>
    }
}

export default Contact;
