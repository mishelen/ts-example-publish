import { Greeter, Greeting } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('My Greeting', () => {
  const inst = new Greeting('Carl');
  expect(inst.greeter()).toBe('Hello Carl');
});
