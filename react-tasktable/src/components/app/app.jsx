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
    isLoading: false, // загрузка
    sort: 'asc', // 'desc'
    sortField: 'id', // поле по умолчанию
    totalUsers: null, // всего юзеров приходит с сервера
    userSelected: null,
    currentPage: 0, // текущая страница
    pageSize: 50, // количество выводимых юзеров на странице
    filterStr: '', // строка фильтрации
    isError: false, // загрузка
    tableHead: ['id', 'First Name', 'Last Name', 'e-mail', 'phone'],
    isSelectedVolume: false,
  };

  //-------------Вывод детальной информации о пользователе ----------
  viewUserInfo = (elem) => {
    this.setState({
      userSelected: elem,
    });
  };

  //----------------------------поиск/фильтрация элементов------------------
  onSearchChange = (filterStr) => {
    this.setState({ filterStr });
  };

  searchFilter = (items, filterStr) => {
    if (filterStr === 0) {
      return items;
    }
    return items.filter((item) => {
      return (
        item.firstName.toLowerCase().indexOf(filterStr.toLowerCase()) > -1
        // item.lastName.toLowerCase().indexOf(filterStr.toLowerCase()) > -1 ||
        // item.email.toLowerCase().indexOf(filterStr.toLowerCase()) > -1 ||
        // item.phone.toLowerCase().indexOf(filterStr.toLowerCase()) > -1
      );
    });
  };
  //-----------------------------------------------------------------------------
  //------------------------функция сортировки столбца------
  sortTableFunc = (sortColumn) => {
    const { data, sort } = this.state;
    const dataCopy = [...data];
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
    const { data } = this.state;
    this.setState({
      isLoading: true,
      isSelectedVolume: true,
    });
    tableService.getUsers(num).then((users) => {
      this.setState({
        isLoading: false,
        data: _.orderBy(users, users.id, 'asc'),
        totalUsers: data.length,
      });
    });
  };

  //--------------------------------------Функция пагинации-------------------------------------------

  onPageChange = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  render() {
    const {
      data,
      isLoading,
      userSelected,
      sortField,
      sort,
      isSelectedVolume,
      pageSize,
      filterStr,
      currentPage,
    } = this.state;

    const visibleItems = this.searchFilter(data, filterStr);
    const pageCount = Math.ceil(data.length / pageSize);
    const displayData = _.chunk(visibleItems, pageSize)[currentPage];

    if (!isSelectedVolume) {
      return <Choice onChangeVolume={this.onChangeVolume} />;
    }

    return (
      <div className={`container`}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <FilterPanel onSearchChange={this.onSearchChange} />
            <Table
              data={displayData}
              getSort={this.sortTableFunc}
              sort={sort}
              sortField={sortField}
              userSelected={userSelected}
              viewUserInfo={this.viewUserInfo}
            />
          </>
        )}
        {data.length > pageSize ? (
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            initialPage={1}
            pageRangeDisplayed={10}
            onPageChange={this.onPageChange}
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
      </div>
    );
  }
}
