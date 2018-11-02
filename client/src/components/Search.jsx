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

      // From props up top, start search
      this.props.onPageSearch(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div className="search-container">
        <form>
          <div>
            {/* <div>
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={searchStyle}
              >
                <path
                  d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1"
                  fillRule="evenodd"
                />
              </svg>
            </div> */}
          </div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="search-form"
            placeholder="Search reviews"
            onKeyPress={this.handleKeyPress}
          />
        </form>
      </div>
    );
  }
}

export default Search;