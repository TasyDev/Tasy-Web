import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { ContactFormModule } from '../modules/forms/ContactFormModule';

export class HomePage {
  readonly page: Page;
  readonly contactFormRoot: Locator;
  readonly contactForm: ContactFormModule;

  constructor(page: Page) {
    this.page = page;
    this.contactFormRoot = page.getByTestId('contact-form');
    this.contactForm = new ContactFormModule(page, this.contactFormRoot);
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Sebasti/i);
    await expect(this.contactFormRoot).toHaveAttribute('data-hydrated', 'true');
  }
}
