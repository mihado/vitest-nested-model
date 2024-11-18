import Model from '@/models/model.js';

export default class Person extends Model {
  id = 'PersonBase';

  constructor(data = {}) {
    super(data);
    this.id = data.id || this.id;
    this.name = data.name || 'PersonBaseName';
    this.age = data.age || 0;
  }
}
