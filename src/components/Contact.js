import React from 'react';
import { Translate } from 'react-redux-i18n';
import TitleUtil from "./TitleUtil";
import Axios from "axios";

const LT_TITLE = 'Kontaktai | EkoVormas';
const EN_TITLE = 'Contact us | EkoVormas';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            phone: '-',
            error: false,
            sent: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        const { lang } = this.props.match.params;
        const { state } = this.props.location;
        TitleUtil.setPageTitle(lang, LT_TITLE, EN_TITLE);

        // we are setting textarea text from selected vermicompost bag
        this.setState({
            message: this._preformatTextArea(lang, state)
        });
    }

    componentWillUpdate(nextProps) {
        const {lang} = this.props.match.params;
        const newLang = nextProps.match.params.lang;
        if (newLang !== lang) {
            TitleUtil.setPageTitle(newLang, LT_TITLE, EN_TITLE);
        }
    }

    _preformatTextArea(lang, value) {
        if (lang === 'en' && value) {
            return `Hello, I would like to order ${value} liters of vermicompost.`;
        }
        else if (lang === 'lt' && value) {
            return `Sveiki, norėčiau užsisakyti ${value} litrų biohumuso pakuotę.`;
        }
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    };

    _handleResponse(sent, error) {
        this.setState({
            name: '',
            email: '',
            message: '',
            phone: '',
            sent,
            error,
        });
    }

    _formatResponseText() {
        const {sent, error} = this.state;
        if (sent) {
            return <div className="alert alert-success"><strong><Translate value='thankYou'/></strong> <Translate value='messageSent'/></div>;
        }

        if (error) {
            return <div className="alert alert-danger"><strong><Translate value='atsiprasomeEmail'/></strong> <Translate value='atsiprasomeMessageEmail'/> <a href={'mailto:info@ekovormas.lt'}>info@ekovormas.lt</a></div>;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {name, email, phone, message} = this.state;
        if (!name || !email || !message) {
            this._handleResponse(false, true);
            return;
        }

        Axios({
            method: 'post',
            url: '/api/sendEmail.php',
            headers: { 'content-type': 'application/json' },
            data: {
                name: name,
                email: email,
                phone: phone,
                message: message,
            }
        })
        .then(() => {
            this._handleResponse(true, false);
        })
        .catch(() => {
            this._handleResponse(false, true);
        });
    };

    render() {
        const { name, email, phone, message } = this.state;
        return (
            <div className="container fullScreen">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="kontaktuRaide"><Translate value='parasykiteMums'/></h1>
                        <div className="bootstrap-iso">
                            <div className="container-fluid">
                                <form>
                                    {this._formatResponseText()}
                                    <div className="form-group ">
                                        <label className="control-label requiredField" htmlFor="name">
                                            <Translate value='vardasPavarde'/>
                                            <span className="asteriskField">*</span>
                                        </label>
                                        <input className="form-control" id="name" onChange={this.handleChange}
                                               name="name" type="text" value={name} autoComplete='off' required/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="control-label requiredField" htmlFor="email">
                                            <Translate value='jusuEmail'/>
                                            <span className="asteriskField">*</span>
                                        </label>
                                        <input className="form-control" id="email" onChange={this.handleChange}
                                               name="email" value={email} type="email" required/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="control-label " htmlFor="tel">
                                            <Translate value='jusuTel'/>
                                        </label>
                                        <input className="form-control" id="tel" onChange={this.handleChange}
                                               name="phone" type="text" value={phone} autoComplete='off' required/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="control-label requiredField" htmlFor="message">
                                            <Translate value='zinutesTekstas'/>
                                            <span className="asteriskField">*</span>
                                        </label>
                                        <textarea className="form-control" cols="40" value={message} id="message" onChange={this.handleChange} name="message" rows="10" />
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <button className="btn btn-success btn-lg" name="submit" type="submit"
                                                    onClick={this.handleSubmit}>
                                                <Translate value='siusti'/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
