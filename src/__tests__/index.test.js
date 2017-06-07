import React from 'react';
import ScrollingLock from '../index';

const Item = (props) => <div {...props} />;

describe('ScrollingLock', () => {
    it('should render correctly', () => {
        const ItemDefault = ScrollingLock()(Item);
        const ItemClassName = ScrollingLock({
            className: 'test',
        })(Item);

        const wrapperDefault = shallow(<ItemDefault />);
        const wrapperClassName = shallow(<ItemClassName foo="bar" />);

        expect(wrapperDefault).toMatchSnapshot('default');
        expect(wrapperClassName).toMatchSnapshot('class name');
        expect(() => ScrollingLock()()).toThrowErrorMatchingSnapshot();
    });
});
