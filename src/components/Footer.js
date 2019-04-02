import React from 'react';
import { Translate } from 'react-redux-i18n';
import Facebook from '../img/icons/facebook.svg';
import LinkedIn from '../img/icons/linkedIn.svg';
import Whatsapp from '../img/icons/whatsapp.svg';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-lg-8">
                        <p className="footer-copyright">© 2019 Ekovormas. <Translate value='visosTeisesSaugomos' /></p>
                    </div>
                    <div className="col-xs-6 col-lg-4">
                        <div className="footer-social">
                            <a href="https://www.linkedin.com/company/ekovormas/" rel="noopener noreferrer" target="_blank" className="social-icons circle"><img src={LinkedIn} className={'icon'} alt={'Ekovormas LinkedIn'} /></a>
                            <a href="https://www.facebook.com/ekovormas" rel="noopener noreferrer" target="_blank" className="social-icons circle"><img src={Facebook} className={'icon'} alt={'Ekovormas facebook'} /></a>
                            <a href="https://api.whatsapp.com/send?phone=37060939394" rel="noopener noreferrer" target="_blank" className="social-icons circle"><img src={Whatsapp} className={'icon'} alt={'Ekovormas Whatsapp'} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
