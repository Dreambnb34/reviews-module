import React, {Component} from 'react';

const searchStyle = {
  height: '1em',
  width: '1em',
  display: 'block',
  fill: 'currentColor',
};

const otherStyle = {
  visibility: 'visible',
  height: '32px',
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('Here!!!!!!!');
      // From props up top, start search
      this.props.onPageSearch(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div className="search-container">
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="search-form"
            placeholder="Search reviews"
            onKeyDown={this.handleKeyPress}
          />
        </form>
      </div>
    );
  }
}

export default Search;
