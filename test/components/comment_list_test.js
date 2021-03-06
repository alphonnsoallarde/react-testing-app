import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Another Comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('Shows an <li> for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('Shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Another Comment');
  });
});
