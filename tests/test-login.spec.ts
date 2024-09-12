import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.getByRole('link', { name: 'Ingresa', exact: true }).click();
  await page.getByTestId('user_id').click();
  await page.getByTestId('user_id').fill('jhonfredy-arias@hotmail.com');
  await page.getByRole('button', { name: 'Continuar' }).click();

  // Esperar a que el iframe del captcha se cargue
  const iframeElement = await page.waitForSelector('iframe[title="reCAPTCHA"]');

  // Acceder al iframe
  const iframe = await iframeElement.contentFrame();

  // Esperar a que el captcha dentro del iframe sea visible
  const captcha = await iframe.waitForSelector('span#recaptcha-anchor', { state: 'visible' });

  // Assert para verificar si el captcha se muestra
  expect(await captcha.isVisible()).toBeTruthy(); // Verifica si el captcha es visible
});
