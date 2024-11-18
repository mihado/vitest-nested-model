import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import Model from '@/models/model.js';

describe('Model', () => {
  let model;

  beforeEach(() => {
    model = new Model();
  });

  afterEach(() => {
    model = null;
  });

  it('should have an id', () => {
    expect(model.id).toBe('ModelBase');
  });

  it('should have a constructor', () => {
    expect(model.constructor).toBeDefined();
  });

  it('should have a constructor that sets the id', () => {
    model = new Model({ id: '123' });
    expect(model.id).toBe('123');
  });
});
