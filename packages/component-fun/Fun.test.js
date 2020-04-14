import Fun from './Fun.svelte';

const renderUI = () => {
  const component = new Fun({ target: document.body });
  return component;
};

describe('Fun', () => {
  test('Renders without errors', () => {
    const component = renderUI();
    expect(component).toBeTruthy();
  });
});
