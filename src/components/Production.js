import React from 'react';
import { NavLink } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import TitleUtil from "./TitleUtil";

const LT_TITLE = 'Biohumuso gaminimo procesas. Kaip gaminti biohumusą? | EkoVormas';
const EN_TITLE = 'How to produce vermicompost? | EkoVormas';

class Production extends React.Component {
    componentWillMount() {
        const { lang } = this.props.match.params;
        TitleUtil.setPageTitle(lang, LT_TITLE, EN_TITLE)
    }

    componentWillUpdate(nextProps) {
        const { lang } = this.props.match.params;
        const newLang =  nextProps.match.params.lang;
        if (newLang !== lang) {
            TitleUtil.setPageTitle(newLang, LT_TITLE, EN_TITLE);
        }
    }

    render() {
        return (
            <div className="container fullScreen">
                <div className="col-md-6">
                    <h1 className="raide"><Translate value='kaipGamintiBio' /></h1>
                    <p><Translate value='biohumusGamybaSusideda' /></p>

                    <h3 className="raide"><Translate value='pirmasEtapas' /></h3>
                    <p className="text-justify"><Translate value='ruosiamasSubstratas' /></p>

                    <p><Translate value='rietuveseVyksta' /></p>

                    <h3 className="raide"><Translate value='antrasEtapas' /></h3>
                    <p className="text-justify"><Translate value='taiAtskiraPatalpa' /></p>
                    <p className="text-justify"><Translate value='sliekamsPerdirbant' /></p>

                    <h3 className="raide"><Translate value='treciasEtapas' /></h3>
                    <p className="text-justify"><Translate value='siameEtapeZaliavinis' /></p>

                    <h4 className="raide"><b><Translate value='susidomejoteBioGamyba' /></b></h4>
                    <p className="text-justify"><Translate value='norintSusisiekti' /><NavLink to="/contact" className="nav-link active"><Translate value='spauskiteCia' /></NavLink>
                        <Translate value='arba' /> <Translate value='telefonoNumeriai' /></p>
                    <p><Translate value='elPastas' /><a href="mailto:info@ekovormas.lt" target="_top"><Translate value='elPastasSiusti' /></a></p>

                </div>
            </div>
        )
    }
}

export default Production
