
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { withThemeProvider } from '../utils';
import { Hello } from './hello.component';

describe('Main Title Component', () => {

    let component: renderer.ReactTestRenderer;
    const theme = {};

    beforeEach(() => {
        component = renderer.create(withThemeProvider(<Hello name='Jan Kowalski' />, theme));
    });

    test('should be defined', () => {
        expect(component).toBeDefined();
    });

    test('should match snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should have proper styles', () => {
        const tree = component.toJSON();
        expect(tree).toHaveStyleRule('color', 'red');
    });

});
