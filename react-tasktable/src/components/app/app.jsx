import React, { Component } from 'react';
import FilterPanel from '../filterPanel';
import Paginator from '../paginator';
import Table from '../table/table';
import TableService from '../../service/table-service';
import Spinner from '../spinner/';
import _ from 'lodash';
// import styles from './app.module.css';

export default class App extends Component {
  state = {
    data: [], // данные с сервера
    isLoading: true, // загрузка
    sort: 'asc', // 'desc'
    sortField: 'id', // поле по умолчанию
    totalUsers: null, // всего юзеров приходит с сервера
    currentPage: 1, // текущая страница
    pageSize: 10, // количество выводимых юзеров на странице
    filterStr: '', // строка фильтрации
    isError: false, // загрузка
    tableHead: ['id', 'First Name', 'Last Name', 'e-mail', 'phone'],
  };
  componentDidMount() {
    const tableService = new TableService();
    tableService.getUsers().then((users) => {
      this.setState({ data: users, isLoading: false, totalUsers: users.length });
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

  sortTableFunc = (sortColumn) => {
    const { data, sort } = this.state;
    const dataCopy = data.concat();
    const sortMethod = sort === 'asc' ? 'desc' : 'asc';
    const sortingData = _.orderBy(dataCopy, sortColumn, sortMethod);
    this.setState({
      data: sortingData,
      sort: sortMethod,
      sortField: sortColumn,
    });
  };

  render() {
    const { data, filterStr, isLoading } = this.state;

    // const visibleItems = this.searchFilter(data, filterStr);

    return (
      <div className={`container`}>
        <Paginator
          totalUsers={this.props.totalUsers}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          setCurrenPage={this.setCurrentPage}
        />
        <FilterPanel data={data} handleFilter={this.handleFilter} filterStr={filterStr} />
        {isLoading ? (
          <Spinner />
        ) : (
          <Table
            data={data}
            getSort={this.sortTableFunc}
            sort={this.state.sort}
            sortField={this.state.sortField}
          />
        )}
      </div>
    );
  }
}
