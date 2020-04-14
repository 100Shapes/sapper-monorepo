import Fun from './Fun.svelte';
import { render } from '@testing-library/svelte';

const renderUI = (props = {}) => render(Fun, props);

describe('Fun', () => {
  test('Has a default label of `fun`', () => {
    const { getByText } = renderUI();
    expect(getByText(/fun/i)).toBeInTheDocument();
  });

  test('Renders custom labels', () => {
    const { getByText } = renderUI({ label: 'Cat' });
    expect(getByText(/cat/i)).toBeInTheDocument();
  });
});
