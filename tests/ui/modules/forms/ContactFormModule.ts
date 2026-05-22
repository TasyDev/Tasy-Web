import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { FormModule } from './FormModule';

export class ContactFormModule extends FormModule {
  constructor(page: Page, root: Locator) {
    super(page, root);
  }

  nameInput() {
    return this.root.locator('#contact-name');
  }

  emailInput() {
    return this.root.locator('#contact-email');
  }

  subjectInput() {
    return this.root.locator('#contact-subject');
  }

  messageInput() {
    return this.root.locator('#contact-message');
  }

  async fill(data: { name: string; email: string; subject: string; message: string }) {
    await this.nameInput().fill(data.name);
    await this.emailInput().fill(data.email);
    await this.subjectInput().fill(data.subject);
    await this.messageInput().fill(data.message);
  }

  async expectAllRequiredErrors() {
    await this.expectFieldError('contact-name', /obligatorio/i);
    await this.expectFieldError('contact-email', /obligatorio/i);
    await this.expectFieldError('contact-subject', /obligatorio/i);
    await this.expectFieldError('contact-message', /obligatorio/i);
  }

  async expectInvalidEmailError() {
    await this.expectFieldError('contact-email', /no.*v[aá]lido/i);
    await expect(this.emailInput()).toHaveAttribute('aria-invalid', 'true');
  }
}

