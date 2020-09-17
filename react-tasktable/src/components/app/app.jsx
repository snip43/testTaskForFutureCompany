import React, { Component } from 'react';
import FilterPanel from '../filterPanel';
import Table from '../table/table';
import TableService from '../../service/table-service';
import Spinner from '../spinner/';
import _ from 'lodash';
import Choice from '../choice/choice';
import ReactPaginate from 'react-paginate';
// import styles from './app.module.css';
const tableService = new TableService();
export default class App extends Component {
  state = {
    data: [], // данные с сервера
    isLoading: true, // загрузка
    sort: 'asc', // 'desc'
    sortField: 'id', // поле по умолчанию
    totalUsers: null, // всего юзеров приходит с сервера
    userSelected: null,
    currentPage: 1, // текущая страница
    pageSize: 50, // количество выводимых юзеров на странице
    filterStr: '', // строка фильтрации
    isError: false, // загрузка
    tableHead: ['id', 'First Name', 'Last Name', 'e-mail', 'phone'],
    isSelectedVolume: false,
  };

  //---------------------Жизненный цикл --------------
  componentDidMount() {
    tableService.getUsers(32).then((users) => {
      this.setState({ data: users, isLoading: false, totalUsers: users.length });
    });
  }
  //-------------Вывод детальной информации о пользователе ----------
  viewUserInfo = (elem) => {
    this.setState({
      userSelected: elem,
    });
  };

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

  //------------------------функция сортировки столбца------
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
  //------------------------------- Флаг выбора количества элементов --------------
  onChangeVolume = (num) => {
    tableService.getUsers(num).then((users) => {
      this.setState({
        data: users,
        isLoading: false,
        isSelectedVolume: true,
        totalUsers: users.length,
      });
    });
  };
  //--------------------------------------Функция пагинации-------------------------------------------

  handlePageClick = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  render() {
    const {
      data,
      filterStr,
      isLoading,
      userSelected,
      sortField,
      sort,
      isSelectedVolume,
      pageSize,
    } = this.state;

    const viewUsers = _.chunk(data, pageSize)[this.state.currentPage];

    if (!isSelectedVolume) {
      return <Choice onChangeVolume={this.onChangeVolume} />;
    }

    // const visibleItems = this.searchFilter(data, filterStr);

    return (
      <div className={`container`}>
        {data.length > 50 ? (
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={`${this.state.totalUsers}/${this.state.pageSize}`}
            marginPagesDisplayed={2}
            initialPage={1}
            pageRangeDisplayed={10}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.state.currentPage}
          />
        ) : null}

        <FilterPanel data={data} handleFilter={this.handleFilter} filterStr={filterStr} />
        {isLoading ? (
          <Spinner />
        ) : (
          <Table
            data={viewUsers}
            getSort={this.sortTableFunc}
            sort={sort}
            sortField={sortField}
            userSelected={userSelected}
            viewUserInfo={this.viewUserInfo}
          />
        )}
      </div>
    );
  }
}
