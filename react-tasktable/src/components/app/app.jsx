import React, { Component } from 'react';
import FilterPanel from '../filterPanel';
import Paginator from '../paginator';
import Table from '../table/table';
import TableService from '../../service/table-service';
import Spinner from '../spinner';
// import styles from './app.module.css';

export default class App extends Component {
  state = {
    data: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    const tableService = new TableService();
    tableService.getUsers().then((users) => {
      this.setState({ data: users });
    });
  }
  render() {
    const { data } = this.state;
    if (!data) {
      return <Spinner />;
    }

    return (
      <div className={`container`}>
        <Paginator />
        <FilterPanel />
        <Table data={data} />
      </div>
    );
  }
}
