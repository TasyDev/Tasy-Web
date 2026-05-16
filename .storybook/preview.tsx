import type { Preview } from '@storybook/react-vite';

import MockDate from 'mockdate';
import { initialize, mswLoader } from 'msw-storybook-addon';

import { mswHandlers } from './msw-handlers';

import '../src/styles/global.css';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    msw: { handlers: mswHandlers },
  },
  async beforeEach() {
    localStorage.setItem('theme', 'dark');

    MockDate.set('2020-01-01T00:00:00.000Z');

    globalThis.matchMedia ??= ((query: string) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList);
  },
};

export default preview;
