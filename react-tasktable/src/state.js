const state = {
  data: [], // данные с сервера
  isLoading: true, // загрузка
  sort: 'asc', // 'desc'
  sortColumn: 'id', // поле по умолчанию
  totalUsers: null, // всего юзеров приходит с сервера
  currentPage: 1, // текущая страница
  pageSize: 10, // количество выводимых юзеров на странице
  filterStr: '', // строка фильтрации
  isError: false, // загрузка
  tableHead: ['id', 'First Name', 'Last Name', 'e-mail', 'phone'],
};

export default state;
