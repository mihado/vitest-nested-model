import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import Model from '@/models/model.js';
import Person from '@/models/person.js';
import Manager from '@/models/person/manager.js';

describe('Manager', () => {
  let manager;

  beforeEach(() => {
    manager = new Manager();
  });

  afterEach(() => {
    manager = null;
  });

  it('should extend Person', () => {
    expect(manager instanceof Person).toBe(true);
  });

  it('should extend Model', () => {
    expect(manager instanceof Model).toBe(true);
  });

  it('should have an id', () => {
    expect(manager.id).toBe('Manager');
  });

  it('should have a constructor', () => {
    expect(manager.constructor).toBeDefined();
  });

  it('should have a constructor that sets the id', () => {
    manager = new Manager({ id: 'Manager123' });
    expect(manager.id).toBe('Manager123');
  });

  it('should have a name', () => {
    expect(manager.name).toBe('ManagerName');
  });

  it('should have a name that can be set', () => {
    manager = new Manager({ name: 'John Doe' });
    expect(manager.name).toBe('John Doe');
  });

  it('should have an age', () => {
    expect(manager.age).toBe(0);
  });

  it('should have an age that can be set', () => {
    manager = new Manager({ age: 21 });
    expect(manager.age).toBe(21);
  });
});
