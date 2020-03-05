import React, { Component } from 'react'
import SearchHigherOrderComponent from './SearchHigherOrderComponent'

class GetSearchResult extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            enterPressed: 0,
        }
    }

    fetchResult = (pageNumber, pageSize, id, service, searchText, name, location, hourlyRate) => { 
        let rows = [];
        for(let index = 0; index < id.length; index++) { 
            rows.push(
                <div className="text-center text-lg-left d-inline-block">
                    <div className="ml-4 mt-4 mb-1 pull-left">
                        <img className="card-img-top" src={`../searchImg/${id[index]}.jpg`} alt="" />
                        <div className="card-body p-3 bg-white">
                            <p className="card-title font-weight-bold">{name[index]}</p>
                            <span className="text-secondary font-size-tile-s font-weight-light">{location[index]}</span>
                            <p className="text-secondary font-size-tile-s font-weight-light">&euro;400 - &euro;{hourlyRate[index]}</p>
                            <div className="star_rating">
                                <span className="fa fa-star star-rating-color pr-1" data-rating="1"></span>
                                <span className="fa fa-star star-rating-color pr-1" data-rating="2"></span>
                                <span className="fa fa-star star-rating-color pr-1" data-rating="3"></span>
                                <span className="fa fa-star star-rating-color pr-1" data-rating="4"></span>
                                <span className="fa fa-star text-black-50 pr-1" data-rating="5"></span>
                            </div>
                            <p className="card-text font-size-s font-weight-bold pt-2 text-black-50 text-uppercase">{service[index]} band</p>
                        </div>
                    </div>
                </div>                
            )
        }    
        return rows;
    }

    render() {
        const {pageNumber, pageSize, id, service, searchText, name, location, hourlyRate} = this.props;

        if(!searchText) {
            return (
                <div className="col-10 container-fluid mt-5 p-5 pt-5 search-component text-center">
                </div>    
            )
        } else if(searchText === "musician" || searchText === "Musician" || searchText === "musicians" || searchText === "Musicians") {
            return (
                <section className="search-result-bgcolor container-fluid">
                    <div className="col-10 container-fluid mt-5 p-5 pt-5 search-result-container">
                        <div className="font-weight-bold pb-4">{id.length} musicians found</div>
                        <div className="row">
                            <div className="col-sm-10 d-inline pull-left">
                                <div className="dark-bg col-sm-2 font-weight-lighter mr-4 pl-3 p-2 pull-left text-white search-types header-font-m">
                                    <button type="button" className="close text-white crossIcon-font-s">&times;</button>
                                    <strong>Musician</strong>
                                </div>
                                <div className="bg-white col-sm-2 font-weight-lighter font-weight-normal mr-4 p-2 pull-left search-types header-font-m text-center">
                                    <strong>Any Location</strong>
                                </div>
                                <div className="bg-white col-sm-2 font-weight-lighter font-weight-normal mr-4 p-2 pull-left search-types header-font-m text-center">
                                    <strong>Any Category</strong>
                                </div>
                                <div className="bg-white col-sm-2 font-weight-lighter font-weight-normal mr-4 p-2 pull-left search-types header-font-m text-center">
                                    <strong>Any Price</strong>
                                </div>
                                <div className="bg-white col-sm-2 font-weight-lighter font-weight-normal mr-4 p-2 pull-left search-types header-font-m text-center">
                                    <strong>Any Rating</strong>
                                </div>
                            </div>
                            <div className=" d-inline col-sm-2 pull-right text-black-50 font-weight-bolder header-font-m mt-2">
                                <p>Showing {pageNumber}-{id.length} of {id.length}</p>
                            </div>
                        </div>
                        <div className="row">
                            {this.fetchResult(pageNumber, pageSize, id, service, searchText, name, location, hourlyRate)}
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <div className="col-10 container-fluid mt-5 p-5 pt-5 search-component text-center">
                    <div>
                        <span><i className="fa fa-search-minus text-black-50"></i></span>
                        <span className="pl-2">No results Found</span>
                    </div>
                </div>    
            )
        }
    }
}

export default SearchHigherOrderComponent(GetSearchResult)