import React from 'react';
import { Translate } from 'react-redux-i18n';
import SadWorm from '../img/sad-worm.png';
import TitleUtil from "./TitleUtil";

const LT_TITLE = 'Puslapis nerastas | EkoVormas';
const EN_TITLE = 'Page not found | EkoVormas';

class ErrorPage extends React.Component {

    constructor(props) {
        super(props);
        TitleUtil.setPageTitle('en', LT_TITLE, EN_TITLE)
    }

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
            <div className="container container-high">
                <div className="col-md-6">
                    <h2 className="raide"><Translate value='errorPageText' /></h2>
                    <img src={SadWorm} className={'img-responsive error-worm'} alt={'Sad ekovormas worm'} />
                </div>
            </div>
        )
    }
}


export default ErrorPage
