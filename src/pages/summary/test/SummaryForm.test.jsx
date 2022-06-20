import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('checkbox is unchecked and button is disabled by default', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: 'Confirm order' });
  expect(confirmButton).toBeDisabled();
});

test('checking checkbox enables button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
  const confirmButton = screen.getByRole('button', { name: 'Confirm order' });
  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
});

test('unchecking checkbox again disables button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
  const confirmButton = screen.getByRole('button', { name: 'Confirm order' });
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
