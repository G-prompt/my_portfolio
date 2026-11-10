import type React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import LoadingScreen from './components/LoadingScreen';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

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

  expect(screen.getByRole('navigation')).toHaveTextContent(/Goodluck\s*\.dev/i);
  expect(screen.getByRole('link', { name: /writing/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /certifications/i })).toBeInTheDocument();
  expect(screen.getByRole('status', { name: /loading portfolio/i })).toBeInTheDocument();
});

test('completes the startup loading screen after a short delay', () => {
  jest.useFakeTimers();
  const onComplete = jest.fn();

  render(<LoadingScreen onComplete={onComplete} />);
  act(() => {
    jest.advanceTimersByTime(950);
  });

  jest.useRealTimers();
  expect(onComplete).toHaveBeenCalledTimes(1);
});

test('shows all six live projects and their total count', () => {
  render(<Projects />);

  expect(screen.getByText('6 live projects')).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
});

test('shows an icon for every AI tool and assistant', () => {
  const { container } = render(<Skills />);

  expect(screen.getByText('ChatGPT')).toBeInTheDocument();
  expect(screen.getByText('Claude')).toBeInTheDocument();
  expect(screen.getByText('Perplexity')).toBeInTheDocument();
  expect(screen.getByText('DeepSeek')).toBeInTheDocument();
  expect(screen.getByText('GitHub Copilot')).toBeInTheDocument();
  expect(screen.getByText('Cursor AI')).toBeInTheDocument();
  expect(container.querySelectorAll('.ai-card svg')).toHaveLength(6);
});

test('provides a direct email backup on the contact page', () => {
  render(<Contact />);

  expect(screen.getByRole('link', { name: 'goodluckelisha21@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:goodluckelisha21@gmail.com'
  );
  expect(screen.getByText(/direct email backup/i)).toBeInTheDocument();
});
