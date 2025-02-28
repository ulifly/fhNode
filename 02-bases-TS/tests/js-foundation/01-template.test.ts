import { emailTemplate } from '../../src/js-foundation/01-template';

describe('01-template', () => {

  test('should return email template', () => {

    expect(emailTemplate).toContain('Hi, ');
  });

  test('should contain {{name}}', () => {

    expect(emailTemplate).toMatch(/{{name}}/);
  });

});