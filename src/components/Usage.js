import React from 'react';
import Pamidorai from '../img/pamidorai.jpg';
import Seklos from '../img/seklos.jpg';
import Sodas from '../img/sodas.jpg';
import {Translate} from 'react-redux-i18n';
import TitleUtil from "./TitleUtil";

const LT_TITLE = 'Biohumuso naudojimas|Kur ir kaip naudoti biohumusą? | EkoVormas';
const EN_TITLE = 'How, when and where to use vermicompost? | EkoVormas';

class Usage extends React.Component {

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
                <h1 className="raide"><Translate value='bioLaukoIrSilt'/></h1>
                <img src={Pamidorai} className="img-thumbnail"
                     alt="Biohumuso naudojimas lauko ir siltnamio daržovėms pamidorai" width="304" height="236"/>
                <div className="garantuoja">
                    <br/>
                    <ul>
                        <li><Translate value='didinaAtsparuma'/></li>
                        <li><Translate value='gausinaDerliu'/></li>
                        <li><Translate value='gerinaDerliauMaistines'/></li>
                        <li><Translate value='slopinaFitOrganizm'/></li>
                    </ul>
                </div>
                <h3 className="raide"><Translate value='naudojimRekomend'/></h3>
                <p><Translate value='iterpiamaArbBarstoma'/></p>

                <h3 className="raide"><Translate value='naudojimoKiekiai'/></h3>

                <table className="table table-bordered  table-hover table-responsive">

                    <tbody>
                    <tr>
                        <td>
                            <Translate value='kaiSejamosSeklos'/>
                        </td>
                        <td>
                            <Translate value='neutralausPhDurpiu'/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Translate value='kaiPersodinami'/>
                        </td>
                        <td>
                            <Translate value='daiguiArbaGrunto'/><sup>2</sup>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Translate value='laukoDarzovems'/>
                        </td>
                        <td>
                            1 l/m<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='bulvems'/>
                        </td>
                        <td>
                            <Translate value='sodinimoDuobutei'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='siltnamioDarzovems'/>
                        </td>
                        <td>
                            <Translate value='daiguiGruntui'/><sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='papGerinant'/>
                        </td>
                        <td>
                            <Translate value='trysPenkAugalui'/><sup>2</sup> <Translate value='arbaVandens'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='dirvArbatelei'/>
                        </td>
                        <td>
                            <Translate value='siltoVandensIrCukrausParuosta'/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h1 className="raide"><Translate value='bioSeklomsDaiginti'/></h1>
                <img src={Seklos} className="img-thumbnail" alt="Biohumusas Sėkloms daiginti ir daigams persodinti"
                     width="304" height="236"/>
                <div className="garantuoja">
                    <br/>
                    <ul>

                        <li><Translate value='skatinaSekluSudyg'/></li>
                        <li><Translate value='spartinaDaiguPrigijima'/></li>
                        <li><Translate value='stimuliuojaSaknuAtsi'/></li>
                        <li><Translate value='gerinaMitybiniuMedz'/></li>
                    </ul>
                </div>
                <h3 className="raide"><Translate value='naudojimoRekomend'/></h3>
                <p><Translate value='iterpiamaArbaBarstoma'/></p>

                <h3 className="raide"><Translate value='naudojimoKiekiai'/></h3>

                <table className="table table-bordered  table-hover table-responsive">

                    <tbody>
                    <tr>
                        <td>
                            <Translate value='kaiSejamosSeklos'/>
                        </td>
                        <td>
                            <Translate value='neutralausPhDurpiu'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='kaiPersodinamiDaigai'/>
                        </td>
                        <td>
                            <Translate value='daiguiArbaGrunto'/><sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='papildomaiGerinantAugalu'/>
                        </td>
                        <td>
                            <Translate value='augaluArbaVandens'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='dirvArbatelei'/>
                        </td>
                        <td>
                            <Translate value='siltoVandensIrCukraus'/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h1 className="raide"><Translate value='bioSodoAugalamsIrVejoms'/></h1>
                <img src={Sodas} className="img-thumbnail" alt="Biohumusas Sodo augalams ir vejoms" width="304"
                     height="236"/>
                <div className="garantuoja">
                    <br/>
                    <ul>

                        <li><Translate value='stiprinaAugImunitet'/></li>
                        <li><Translate value='stimuliuojAugalAugima'/></li>
                        <li><Translate value='spartinaGausinaIrSodrina'/></li>
                        <li><Translate value='apsaugoNuoChlorozes'/></li>
                    </ul>
                </div>
                <h3 className="raide"><Translate value='naudRekom'/></h3>
                <p><Translate value='iterpiamaArbaBarstomaLokaliai'/></p>

                <h3 className="raide"><Translate value='naudojimoKiekiai'/></h3>

                <table className="table table-bordered table-hover">

                    <tbody>
                    <tr>
                        <td>
                            <Translate value='kaiSejamosSeklosIrPikuojami'/>
                        </td>
                        <td>
                            <Translate value='neutralausPhDurpiu'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='kaiPersodinamiDaigaiIrViskas'/>
                        </td>
                        <td>
                            <Translate value='daiguiArbaGrunto'/><sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='neLaukoDarzovems'/>
                        </td>
                        <td>
                            1 l/m<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='braskemsIrUogenojams'/>
                        </td>
                        <td>
                            <Translate value='vienasAugalujSodinDuobut'/><sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='uogakrumiamsIrVaiskrumiams'/>
                        </td>
                        <td>
                            <Translate value='augaluiSodDuobutAstuoniLperM'/><sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='vaismedziams'/>
                        </td>
                        <td>
                            <Translate value='augalujDuobutArbaDvylikLperM'/><sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='dekoratAugal'/>
                        </td>
                        <td>
                            <Translate value='augaluiSodDuobSesSimtperL'/><sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='vejoms'/>
                        </td>
                        <td>
                            1 l/ m<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='papGerinant'/>
                        </td>
                        <td>
                            <Translate value='trysPenkAugalui'/><sup>2</sup> <Translate value='arbaVandens'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Translate value='dirvArbatelei'/>
                        </td>
                        <td>
                            <Translate value='SiltVandensKurisParuostaMikstura'/>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Usage
