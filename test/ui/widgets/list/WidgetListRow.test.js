import React from 'react';

import 'test/enzyme-init';
import { shallow } from 'enzyme';
import { DropdownKebab } from 'patternfly-react';
import WidgetListRow from 'ui/widgets/list/WidgetListRow';

const onDelete = jest.fn();

describe('WidgetListRow', () => {
  let component;
  beforeEach(() => {
    component = shallow(<WidgetListRow name="test" code="WTF" used={2} onDelete={onDelete} />);
  });
  it('renders component without crashing', () => {
    expect(component.exists()).toBe(true);
  });

  it('has class WidgetListRow', () => {
    expect(component.hasClass('WidgetListRow')).toBe(true);
  });

  it('has four columns', () => {
    expect(component.find('td')).toHaveLength(4);
  });

  it('has last column is a DropdownKebab Component', () => {
    const last = component.find('td').last();
    expect(last.find(DropdownKebab).exists()).toBe(true);
  });

  it('call onClickDelete', () => {
    component.find('.WidgetListRow__menu-item-delete').simulate('click');
    expect(onDelete).toHaveBeenCalled();
  });
});
