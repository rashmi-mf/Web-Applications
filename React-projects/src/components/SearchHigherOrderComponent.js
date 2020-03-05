import React from 'react'

const SearchHigherOrderComponent = (WrappedComponent) => {
    class SearchHigherOrderComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                pageNumber: '',
                pageSize: '',
                data: [],
                id: '',
                service: [],
                name: [],
                location: [],
                hourlyRate: []
            }
        }

        async componentDidMount() {
            const url = "https://api.qrated.pro/services/search?query=london&pageNumber=1&pageSize=10";
            const response = await fetch(url);
            const result = await response.json();
            let pageNumber = result.pageNumber;
            let pageSize = result.pageSize;
            let id = result.content.map((val) => val.id);
            let service = result.content.map((val) => val.service);
            let name = result.content.map((val) => val.name);
            let location = result.content.map((val) => val.location);
            let hourlyRate = result.content.map((val) => val.hourlyRate);
    
            this.setState({
                pageNumber: pageNumber,
                pageSize: pageSize,
                id: id,
                data: result,
                service: service,
                name: name,
                location: location,
                hourlyRate: hourlyRate,
            })
        }    

        render() {
            const {pageNumber, pageSize, id, service, name, location, hourlyRate} = this.state;
            return (
                <WrappedComponent 
                pageNumber={pageNumber}
                pageSize={pageSize}
                id={id}
                service={service}
                name={name}
                location={location}
                hourlyRate={hourlyRate}
                { ... this.props}
                />
            )
        }
    }
    return SearchHigherOrderComponent
}

export default SearchHigherOrderComponent;