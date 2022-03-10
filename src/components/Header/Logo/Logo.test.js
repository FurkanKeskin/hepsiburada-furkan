import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Logo from './Logo';

test('renders learn react link', () => {
    render( <Logo/ > );
    const linkElement = screen.getByTestId("logo");
    expect(linkElement).toBeInTheDocument();
});