import React, {Component} from 'react';
import GetSearchResult from "./components/GetSearchResult";
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import './StyleSheet.css'


class App extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            searchText: '',
        }
    }
    

    handleChange = (event) => {
        this.setState({
            searchText: event.target.value
        }) 
    }

    render() {        
        let {searchText} = this.state;
        return (
            <React.Fragment>
                <PageHeader />
                <section className="big-dot-bg text-center">
                    <div className="container">
                        <h4>Explore our bespoke services</h4>
                        <div className="col-sm-4 container mt-4">
                            <div className="input-group">
                                <input className="border-right-0 form-control textbox-size font-lightweight" type="text" placeholder="Search" aria-label="Search" id="searchText" value={searchText} onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-white text-black-50" id=""><i className="fa fa-search"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
                <GetSearchResult searchText={searchText} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;