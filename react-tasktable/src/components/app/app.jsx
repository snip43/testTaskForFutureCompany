import React, { Component } from 'react';
import FilterPanel from '../filterPanel';
import Paginator from '../paginator';
import Table from '../table/table';
import TableService from '../../service/table-service';
import Spinner from '../spinner/';
// import styles from './app.module.css';

export default class App extends Component {
  state = {
    data: [],
    totalUsers: null,
    currentPage: 1,
    pageSize: 10,
    filterStr: '',
    loading: false,
    error: false,
    tableColumns: [
      {
        label: 'id',
        sort: 'default',
      },
      {
        label: 'firstName',
        sort: 'default',
      },
      {
        label: 'lastName',
        sort: 'default',
      },
      {
        label: 'email',
        sort: 'default',
      },
      {
        label: 'phone',
        sort: 'default',
      },
    ],
  };

  componentDidMount() {
    const tableService = new TableService();
    tableService.getUsers().then((users) => {
      this.setState({ data: users, totalUsers: users.length });
    });
  }

  // componentWillMount() {
  //   const { data } = this.state;
  //   this.setState({ data });
  // }

  // setCurrentPage = (page) => {
  //   this.setState({ currentPage: page });
  // };

  // handleFilter = (value, data) => {
  //   console.log(`${value}: ${data}`);
  //   this.setState({ filterStr: value, data: data });
  // };

  // searchFilter = (data, filterStr) => {
  //   if (filterStr.length === 0) {
  //     return data;
  //   }

  //   return data.filter((elem) => {
  //     // console.log(elem.firstName.toLowerCase().indexOf(filterStr.toLowerCase()) > -1);
  //     return elem.firstName.toLowerCase().indexOf(filterStr.toLowerCase()) > -1;
  //   });
  // };

  render() {
    const { data, filterStr, tableColumns, loading } = this.state;
    // const visibleItems = this.searchFilter(data, filterStr);

    return (
      <div className={`container`}>
        <Paginator
          totalUsers={this.state.totalUsers}
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          setCurrenPage={this.setCurrenPage}
        />
        <FilterPanel data={data} handleFilter={this.handleFilter} filterStr={filterStr} />
        {loading ? <Spinner /> : <Table data={data} columns={tableColumns} />}
      </div>
    );
  }
}
