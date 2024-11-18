import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import Model from '@/models/model.js';
import Person from '@/models/person.js';

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person();
  });

  afterEach(() => {
    person = null;
  });

  it('should extend Model', () => {
    expect(person instanceof Model).toBe(true);
  });

  it('should have an id', () => {
    expect(person.id).toBe('PersonBase');
  });

  it('should have a constructor', () => {
    expect(person.constructor).toBeDefined();
  });

  it('should have a constructor that sets the id', () => {
    person = new Person({ id: 'Person123' });
    expect(person.id).toBe('Person123');
  });

  it('should have a name', () => {
    expect(person.name).toBe('PersonBaseName');
  });

  it('should have a name that can be set', () => {
    person = new Person({ name: 'John Doe' });
    expect(person.name).toBe('John Doe');
  });

  it('should have an age', () => {
    expect(person.age).toBe(0);
  });

  it('should have an age that can be set', () => {
    person = new Person({ age: 21 });
    expect(person.age).toBe(21);
  });
});
