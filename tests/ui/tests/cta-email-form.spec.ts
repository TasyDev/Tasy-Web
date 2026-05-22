import { test, expect } from '@playwright/test';
import { EmailCtaFormModule } from '../modules/forms/EmailCtaFormModule';

test.describe('CTA email form', () => {
  test('shows error for invalid email', async ({ page }) => {
    await page.goto('/portafolio/automatizador-de-carruseles');

    const root = page.getByTestId('cta-email-form');
    await expect(root).toHaveAttribute('data-hydrated', 'true');
    const form = new EmailCtaFormModule(page, root);

    await form.emailInput().fill('not-an-email');
    await form.submit();

    await form.expectInvalidEmailError();
  });

  test('submits successfully (mocked Formspree)', async ({ page }) => {
    await page.route('https://formspree.io/**', async (route) => {
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

    await page.goto('/portafolio/automatizador-de-carruseles');

    const root = page.getByTestId('cta-email-form');
    await expect(root).toHaveAttribute('data-hydrated', 'true');
    const form = new EmailCtaFormModule(page, root);

    const dialogPromise = page.waitForEvent('dialog');

    await form.emailInput().fill('test@example.com');
    await form.submit();

    const dialog = await dialogPromise;
    expect(dialog.message()).toMatch(/message sent successfully/i);
    await dialog.accept();
  });
});
