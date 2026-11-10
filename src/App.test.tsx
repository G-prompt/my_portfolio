import type React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
  const React = require('react') as typeof import('react');

  const RouterLink = ({ to, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) =>
    React.createElement('a', { href: to, ...props }, children);

  const RootRoute = ({ children }: { children: React.ReactNode }) => {
    const rootRoute = React.Children.toArray(children).find((child) =>
      React.isValidElement<{ path?: string; element?: React.ReactNode }>(child) && child.props.path === '/'
    );

    return React.isValidElement<{ element?: React.ReactNode }>(rootRoute)
      ? React.createElement(React.Fragment, null, rootRoute.props.element)
      : null;
  };

  return {
    BrowserRouter: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
    Routes: RootRoute,
    Route: () => null,
    Link: RouterLink
  };
}, { virtual: true });

test('renders portfolio navigation with writing and certifications links', () => {
  render(<App />);

  expect(screen.getByText(/goodluck\.dev/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /writing/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /certifications/i })).toBeInTheDocument();
});
