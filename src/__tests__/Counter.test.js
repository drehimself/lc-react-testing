import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Counter';
import userEvent from '@testing-library/user-event';

test('renders the Counter component', () => {
  render(<Counter title="My Counter" />);
  // screen.debug();
  const titleElement = screen.getByText(/My Counter/i);
  expect(titleElement).toBeInTheDocument();

  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('renders the Counter component using selectors', () => {
  const { container } = render(<Counter title="My Counter" />);

  // console.log(container.outerHTML);

  const titleElement = container.querySelector('#title');
  expect(titleElement.textContent).toContain('My Counter');

  const countElement = container.querySelector('#count');
  expect(countElement.textContent).toContain('Count: 0');

  // const countElement = screen.getByText(/Count: 0/i);
  // expect(countElement).toBeInTheDocument();
});

test('increments the counter', () => {
  render(<Counter title="My Counter" />);
  // screen.debug();
  const incrementButton = screen.getByRole('button', {
    name: /increment/i,
  });

  expect(incrementButton).toBeInTheDocument();

  // fireEvent.click(incrementButton);
  userEvent.click(incrementButton);

  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});

test('decrements the counter', () => {
  render(<Counter title="My Counter" />);
  // screen.debug();
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i,
  });

  expect(decrementButton).toBeInTheDocument();

  // fireEvent.click(decrementButton);
  userEvent.click(decrementButton);

  const countElement = screen.getByText(/Count: -1/i);
  expect(countElement).toBeInTheDocument();
});
