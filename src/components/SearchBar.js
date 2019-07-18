import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''}

    onInputChange = event => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        // todo: make sure we call
        //callback from parent
    }

    render() {
        return (
        <div className="search-bar ui segment">
            <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label htmlFor="">Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar