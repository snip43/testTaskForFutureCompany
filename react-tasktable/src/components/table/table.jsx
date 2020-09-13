import React, { Component } from 'react';
import TableBody from '../tableBody';
import TableHead from '../tableHead';

// import Spinner from '../spinner/';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';

export default class Table extends Component {
  state = {
    columns: this.props.columns,
  };

  sortTableFunc = (id, sortMethod) => {
    const { data } = this.props;
    const { columns } = this.state;

    let currentSortMethod = 'default';

    switch (sortMethod) {
      case 'asc':
        console.log('asc');
        currentSortMethod = 'desc';
        break;
      case 'desc':
        console.log('desc');
        currentSortMethod = 'asc';
        break;
      default:
        console.log('default');
        currentSortMethod = 'asc';
    }

    const changeColumn = columns.map((e, i) => ({
      ...e,
      sort: i === id ? currentSortMethod : 'default',
    }));

    const sortData = sortMultidimensionalArrayFunc(data, id, currentSortMethod);

    this.setState({
      data: sortData,
      columns: changeColumn,
    });
  };

  render() {
    const { columns } = this.state;

    return (
      <table className={`table table-hover`}>
        <TableHead getSort={this.sortTableFunc} columns={columns} />
        <TableBody data={this.props.data} />
      </table>
    );
  }
}
//  ({ data, pageSize }) => {
//   if (!data) {
//     return <Spinner />;
//   }
