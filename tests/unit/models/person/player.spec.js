import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import Model from '@/models/model.js';
import Person from '@/models/person.js';
import Player from '@/models/person/player.js';

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  afterEach(() => {
    player = null;
  });

  it('should extend Person', () => {
    expect(player instanceof Person).toBe(true);
  });

  it('should extend Model', () => {
    expect(player instanceof Model).toBe(true);
  });

  it('should have an id', () => {
    expect(player.id).toBe('Player');
  });

  it('should have a constructor', () => {
    expect(player.constructor).toBeDefined();
  });

  it('should have a constructor that sets the id', () => {
    player = new Player({ id: 'Player123' });
    expect(player.id).toBe('Player123');
  });

  it('should have a name', () => {
    expect(player.name).toBe('PlayerName');
  });

  it('should have a name that can be set', () => {
    player = new Player({ name: 'John Doe' });
    expect(player.name).toBe('John Doe');
  });

  it('should have an age', () => {
    expect(player.age).toBe(0);
  });

  it('should have an age that can be set', () => {
    player = new Player({ age: 21 });
    expect(player.age).toBe(21);
  });
});
