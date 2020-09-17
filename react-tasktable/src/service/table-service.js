export default class TableService {
  _getData = async (num) => {
    const url = `http://www.filltext.com/?rows=${num}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return fetch(url);
  };

  getUsers = async (peoples) => {
    if (!(await this._getData(peoples)).ok) {
      throw new Error('Server Error');
    }

    return await this._getData(peoples).then((res) => res.json());
  };

  // getUsersBig = async () => {
  //   const
  //   if (!(await this._getDataSmall()).ok) {
  //     throw new Error('Server Error');
  //   }

  //   return await this._getData().then((res) => res.json());
  // };
}
