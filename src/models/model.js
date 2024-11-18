export default class Model {
  id = 'ModelBase';

  constructor(data = {}) {
    if (data) {
      this.id = data.id || this.id;
    }
  }
}
