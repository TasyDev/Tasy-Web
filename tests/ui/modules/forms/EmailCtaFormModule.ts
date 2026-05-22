import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { FormModule } from './FormModule';

export class EmailCtaFormModule extends FormModule {
  constructor(page: Page, root: Locator) {
    super(page, root);
  }

  emailInput() {
    return this.root.getByPlaceholder(/pon tu correo/i);
  }

  async submit() {
    const submitButton = this.root.getByRole('button', { name: /enviar/i });
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click();
  }

  async expectInvalidEmailError() {
    await expect(this.root.getByText(/correo invalido/i)).toBeVisible();
  }
}
