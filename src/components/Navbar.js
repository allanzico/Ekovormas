import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Sliekas from '../img/sliekas.png';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Translate} from 'react-redux-i18n';
import {setLanguage} from '../actions/NavbarActions';

const changeLanguage = (history, oldLanguage, language, changeFunc) => {
    const {pathname} = history.location;
    const newPathname = pathname.replace('/' + oldLanguage + '/', '/' + language + '/');
    changeFunc(language);
    history.push(newPathname);
};

function _closeMenu(e) {
  const menu = e.currentTarget;
    menu.classList.remove('in');
}

const Navbar = (props) => {
    const { setLanguage } = props.actions;
    const { language } = props;
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="row removeRightMargin">
                    <div className="col-md-2 text-center">
                        <img src={Sliekas} alt="Ekovormas logotipas"/>
                    </div>
                    <div className="col-md-8 text-center">
                        <h1 className="display-1"><span className="zalia_pav"><b>Eko</b></span><span
                            className="tamsi_spalva_pav"><b>Vormas</b></span></h1>
                        <p className="display-4"><span className="mazas_pavadinimas"><b><Translate
                            value='Biohumusas'/> &#9679; <Translate value='sliekai'/></b></span></p>
                    </div>
                    <div className="topRightCorner">
                        <a onClick={() => changeLanguage(props.history, props.language, 'en', setLanguage)}
                           className={`lang-link tamsi_spalva_pav ${language === 'en' ? 'lang-current' : ''}`}>
                            <b className="lang-link-text">EN </b>
                        </a>
                        <a onClick={() => changeLanguage(props.history, props.language, 'lt', setLanguage)}
                           className={`lang-link tamsi_spalva_pav ${language === 'lt' ? 'lang-current' : ''}`}>
                            <b className="lang-link-text">LT </b>
                        </a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Meniu</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" onClick={(e) => _closeMenu(e)}>
                        <ul className="nav navbar-nav" id="menuList">
                            <li><Link to={`/${props.language}/`} className="nav-link"><Translate
                                value='KasYraBiohumusas'/></Link></li>
                            <li><Link to={`/${props.language}/usage`} className="nav-link"><Translate
                                value='kaipNaudotiBiohumusa'/></Link></li>
                            <li><Link to={`/${props.language}/production`} className="nav-link"><Translate
                                value='kaipGamintiBio'/></Link></li>
                            <li><Link to={`/${props.language}/vermicompost-for-sale`} className="nav-link"><Translate
                                value='mesParduodam'/></Link></li>
                            <li><Link to={`/${props.language}/about-ekovormas`} className="nav-link"><Translate
                                value='apieMus'/></Link></li>
                            <li><Link to={`/${props.language}/contact`} className="nav-link"><Translate
                                value='kontaktai'/></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
};

function mapStateToProps(state) {
    return {
        language: state.i18n.locale,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({setLanguage}, dispatch),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
