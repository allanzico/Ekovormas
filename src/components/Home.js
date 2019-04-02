import React, {Component} from 'react';
import { Translate } from 'react-redux-i18n';
import TitleUtil from "./TitleUtil";

const LT_TITLE = 'Parduodamas biohumusas, kalifornijos sliekai, | EkoVormas';
const EN_TITLE = 'Vermicompost for sale | 100% organic fertilizer | EkoVormas';
class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showReadMore: false,
        };

      this._showReadMore = this._showReadMore.bind(this);
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

    _showReadMore() {
        this.setState({
            showReadMore: true
        });
        document.getElementById("readMoreLink").remove();
    }

    render () {
        const removeClass = this.state.showReadMore ? '' : 'hidden';
        return (
            <div className="container fullScreen">
                <div className="col-md-6">
                    <h1 className="raide"><Translate value='KasYraBiohumusas' /></h1>
                    <p className="text-justify"><Translate value='biohumusasTaiIsOrganiniu' /></p>
                    <p className="text-justify"><Translate value='biohumusasYraKertuEfektyvesnis' /></p>
                    <span className={removeClass} id="readMore">
                        <p className="text-justify"><Translate value='biohumusasPraturtinaDirvosStruktura' /></p>
                        <p className="text-justify"><Translate value='biohumusasNeturiNemalonausKvapo' /></p>
                        <p className="text-justify"><Translate value='biohumusasNaudojamasZemesUkio' /></p>
                        <p className="text-justify"><Translate value='bioAtvirameGrunteGalima' /><b><Translate value='issilaikoNetKetSep' /></b></p>
                    </span>
                    <p className="raide link-pointer" id="readMoreLink" onClick={this._showReadMore} ><b><Translate value='skaitytiDaugiau' /></b></p>
                    <h2 className="raide"><Translate value='bioNaudojimasGarantuoja' /></h2>
                    <div className="garantuoja">
                        <ul>
                        <li><Translate value='greitesniSekluPrigijima' /></li>
                        <li><Translate value='geresneDirvosStrukt' /></li>
                        <li><Translate value='ankstesniDerliausSubrendima' /></li>
                        <li><Translate value='augaluAtsparumaTemp' /></li>
                        <li><Translate value='gausesniIrSveikesni' /></li>
                        <li><Translate value='stipresniAugaluImuniteta' /></li>
                        <li><Translate value='dirvosDerlingumoAtstatyma' /></li>
                        <li><Translate value='dirvozemioMikroAktyvumas' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;
