import React from 'react';
import { Translate } from 'react-redux-i18n';
import TitleUtil from "./TitleUtil";

const LT_TITLE = 'Apie mus | UAB EkoVormas';
const EN_TITLE = 'About | EkoVormas';

class About extends React.Component {

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
                    <h1 className="raide"><Translate value='kasMesEsam'/></h1>
                    <p><Translate value='ekovormasBuvoIkurtas'/></p>
                    <h2 className="raide"><Translate value='musuMisija'/></h2>
                    <p className="text-justify"><Translate value='musuMisijaYra'/></p>
                    <h2 className="raide"><Translate value='musuVizija'/></h2>
                    <div className="garantuoja">
                        <ul>
                            <li><Translate value='taptiPagrEfektyv'/></li>
                            <li><Translate value='isvystytiEfektyviusMosklu'/></li>
                            <li><Translate value='taptiIssamiuPatikimos'/></li>
                        </ul>
                    </div>
                    <h2 className="raide"><Translate value='musutikslas'/></h2>
                    <p className="text-justify"><Translate value='musutikslasYra'/></p>
                </div>
            </div>
        )
    }
}

export default About;
