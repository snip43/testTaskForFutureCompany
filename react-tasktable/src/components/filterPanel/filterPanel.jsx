import React, { Component } from 'react';

export default class FilterPanel extends Component {
  state = {
    filterStr: '',
  };

  onSearchChange = (e) => {
    const filterStr = e.target.value;
    this.setState({ filterStr: filterStr });
    this.props.onSearchChange(filterStr);
  };

  render() {
    const { filterStr } = this.state;
    return (
      <div className="input-group my-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Что ищем ?"
          value={filterStr}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}

// = ({ searchFilter }) => {
//   const [value, setValue] = useState('');
//   const valueChange = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div className="input-group my-3 mt-3">
//       <div className="input-group-prepend">
//         <button className="btn btn-outline-secondary" onClick={() => searchFilter(value)}>
//           Search
//         </button>
//       </div>

//     </div>
//   );
// };
