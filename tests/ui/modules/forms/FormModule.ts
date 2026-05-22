import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class FormModule {
  protected readonly page: Page;
  protected readonly root: Locator;

  constructor(page: Page, root: Locator) {
    this.page = page;
    this.root = root;
  }

  async submit() {
    const submitButton = this.root.getByRole('button', { name: /enviar|send/i });
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click();
  }

  async expectFieldError(fieldId: string, message: string | RegExp) {
    const error = this.root.locator(`#${fieldId}-error`);
    await expect(error).toBeVisible();
    await expect(error).toHaveText(message);
  }

  async mockFormspreeOk() {
    await this.page.route('https://formspree.io/**', async (route) => {
      if (route.request().method() === 'OPTIONS') {
        return route.fulfill({
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept',
          }
        });
      }
      if (route.request().method() !== 'POST') return route.continue();
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ ok: true })
      });
    });
  }

  async mockFormspreeFail(status = 500) {
    await this.page.route('https://formspree.io/**', async (route) => {
      if (route.request().method() === 'OPTIONS') {
        return route.fulfill({
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept',
          }
        });
      }
      if (route.request().method() !== 'POST') return route.continue();
      return route.fulfill({
        status,
        contentType: 'application/json',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ ok: false })
      });
    });
  }
}
