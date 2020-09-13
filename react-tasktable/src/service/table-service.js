export default class TableService {
  _getData = async () => {
    const url = `http://www.filltext.com/?rows=32&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}`;
    return fetch(url);
  };

  getUsers = async () => {
    if (!(await this._getData()).ok) {
      throw new Error('Server Error');
    }

    return await this._getData().then((res) => res.json());
  };
}
