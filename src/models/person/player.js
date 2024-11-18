import Person from '@/models/person.js';

export default class Player extends Person {
  id = 'Player';

  constructor(data = {}) {
    super(data);
    this.id = data.id || this.id;
    this.name = data.name || 'PlayerName';
  }
}
