'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useInputValue = require('./');

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  function Component() {
    let name = useInputValue('Jamie');
    return h('input', name);
  }

  let input = render(h(Component));

  t.is(input.toJSON().props.value, 'Jamie');
  input.toJSON().props.onChange({ currentTarget: { value: 'Kyle' } });
  t.is(input.toJSON().props.value, 'Kyle');
});
