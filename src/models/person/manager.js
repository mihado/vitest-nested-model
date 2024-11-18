import Person from '@/models/person.js';

export default class Manager extends Person {
  id = 'Manager';

  constructor(data = {}) {
    super(data);
    this.id = data.id || this.id;
    this.name = data.name || 'ManagerName';
  }
}
