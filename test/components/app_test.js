import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('Shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
/*
describe('App', () => {
  it('Shows the correct text', () => {
    const component = renderComponent(App);

    expect(component).to.contain('React simple starter');
    // Use 'expect' to make an 'assertion' about a target
  });
  // Use 'it' to test a single attribute of a target
});
// Use 'describe' to group together similar tests
*/
