import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Contact form', () => {
  test('shows required errors on empty submit', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.contactForm.submit();
    await home.contactForm.expectAllRequiredErrors();
  });

  test('validates email format', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.contactForm.fill({
      name: 'Test User',
      email: 'not-an-email',
      subject: 'Hola',
      message: 'Mensaje de prueba'
    });

    await home.contactForm.submit();
    await home.contactForm.expectInvalidEmailError();
  });

  test('submits successfully (mocked Formspree)', async ({ page }) => {
    const home = new HomePage(page);

    await home.contactForm.mockFormspreeOk();
    await home.goto();

    const dialogPromise = page.waitForEvent('dialog');

    await home.contactForm.fill({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Hola',
      message: 'Mensaje de prueba'
    });

    await home.contactForm.submit();

    const dialog = await dialogPromise;
    expect(dialog.message()).toMatch(/mensaje enviado|sent successfully/i);
    await dialog.accept();
  });
});

