import React from 'react';
import ProductBox from '../img/produkcija/productBox.png';
import {Translate} from 'react-redux-i18n';
import TitleUtil from './TitleUtil';

const LT_TITLE = 'Parduodamas biohumusas | EkoVormas';
const EN_TITLE = 'Vermicompost for sale | EkoVormas';

class BuyVermicompost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            biohumusValue: '',
        };

        this._handleBiohumusChange = this._handleBiohumusChange.bind(this);
    }


    componentWillMount() {
        const {lang} = this.props.match.params;
        TitleUtil.setPageTitle(lang, LT_TITLE, EN_TITLE)
    }

    componentWillUpdate(nextProps) {
        const {lang} = this.props.match.params;
        const newLang = nextProps.match.params.lang;
        if (newLang !== lang) {
            TitleUtil.setPageTitle(newLang, LT_TITLE, EN_TITLE);
        }
    }

    _biohumusClick() {
        const { lang } = this.props.match.params;
        const { biohumusValue } = this.state;
        this.props.history.push(`/${lang}/contact`, biohumusValue);
    }

    _handleBiohumusChange(e) {
        const biohumusValue = e.target.value;
        this.setState({ biohumusValue });
    }

    render() {
        return (
            <div className="container fullScreen">
                <h1 className="raide"><Translate value='mesParduodam'/></h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail transparentBackground">
                            <a target={'_blank'} href={ProductBox}>
                                <img className={'img-thumbnail'} src={ProductBox} alt={'Vermicompost Ekovormas'} width="200px"/>
                            </a>
                                <div className="caption">
                                <h3 className={'zalia_pav'}>Biohumusas</h3>
                                <label className="radio-inline"><input type="radio" name="vermicompost" value={'10'} onChange={this._handleBiohumusChange} />
                                    10 Liters
                                </label>
                                <label className="radio-inline"><input type="radio" name="vermicompost" value={'30'} onChange={this._handleBiohumusChange} />
                                    30 Liters
                                </label>
                                <label className="radio-inline"><input type="radio" name="vermicompost" value={'1000'} onChange={this._handleBiohumusChange} />
                                    1000 Liters
                                </label>
                                <br/>
                                <label className={'radio-inline zalia_pav boxPrice'}>1.99 &euro;</label>
                                <label className={'radio-inline zalia_pav boxPrice'}>4.99 &euro;</label>
                                <label className={'radio-inline zalia_pav boxPrice'}>119.99 &euro;</label>
                            </div>
                            <div className={'caption'}>
                                <button type="button" onClick={(biohumusValue) => this._biohumusClick(biohumusValue)} className="btn btn-block btn-success orderButton">Užsisakyti</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="raide"><Translate value='musuProdukcija'/></h1>
                <div className="garantuoja">
                    <ul>
                        <li><Translate value='gaminameBiohumusoMis'/></li>
                        <li><Translate value='galimeFasuotaIrNe'/></li>
                        <li><Translate value='parduodameSliekus'/></li>
                        <li><Translate value='gaminameKomposta'/></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BuyVermicompost
