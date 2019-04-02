import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Usage from './Usage';
import Production from './Production';
import BuyVermicompost from './BuyVermicompost';
import Contact from './Contact';
import {bindActionCreators} from "redux";
import {setLanguage} from "../actions/NavbarActions";
import { connect } from 'react-redux';
import ErrorPage from "./ErrorPage";

class Navigon extends React.Component {

    componentDidMount() {
        const { lang } = this.props.match.params;
        this.onLanguageChange(lang);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { lang } = this.props.match.params;
        if (lang !== prevProps.match.params.lang) {
            this.onLanguageChange(lang);
        }
    }

    onLanguageChange = (lng) => {
        const { language, actions } = this.props;
        if (language !== lng) {
            actions.setLanguage(lng);
        }
    };

    render() {
        return (
            <Switch>
                <Route exact path='/:lang(en|lt)/' component={Home} />
                <Route exact path='/:lang(en|lt)/usage' component={Usage} />
                <Route exact path='/:lang(en|lt)/production' component={Production} />
                <Route exact path='/:lang(en|lt)/vermicompost-for-sale' component={BuyVermicompost} />
                <Route exact path='/:lang(en|lt)/about-ekovormas' component={About} />
                <Route exact path='/:lang(en|lt)/contact' component={Contact} />
                <Route path='/:lang/*' component={ErrorPage} />
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return {
        language: state.i18n.locale,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ setLanguage }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigon)
