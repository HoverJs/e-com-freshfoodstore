import crypto from 'node:crypto';

export interface CheckoutPaymentItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export function getBaseUrl() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();

  if (appUrl) {
    return appUrl.replace(/\/$/, '');
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}

export function formatMoneyValue(amount: number) {
  return Math.round(amount).toString();
}

export function buildPaymentDescription(items: CheckoutPaymentItem[]) {
  if (!items.length) {
    return 'Thanh toan don hang FreshFoodStore';
  }

  const names = items.slice(0, 3).map((item) => item.name).join(', ');
  return `FreshFoodStore: ${names}${items.length > 3 ? '...' : ''}`;
}

export function getVietQrConfig(amount: number) {
  const bankBin = process.env.BANK_QR_BIN?.trim();
  const accountNumber = process.env.BANK_QR_ACCOUNT_NO?.trim();
  const accountName = process.env.BANK_QR_ACCOUNT_NAME?.trim();
  const template = process.env.BANK_QR_TEMPLATE?.trim() || 'compact2';
  const memoPrefix = process.env.BANK_QR_MERCHANT_NOTE?.trim() || 'FreshFoodStore';

  if (!bankBin || !accountNumber || !accountName) {
    return {
      enabled: false,
      reason: 'Thiếu cấu hình BANK_QR_BIN, BANK_QR_ACCOUNT_NO hoặc BANK_QR_ACCOUNT_NAME.',
    } as const;
  }

  const transferNote = `${memoPrefix}-${Date.now()}`;
  const encodedAccountName = encodeURIComponent(accountName);
  const encodedTransferNote = encodeURIComponent(transferNote);
  const imageUrl = `https://img.vietqr.io/image/${bankBin}-${accountNumber}-${template}.png?amount=${Math.round(amount)}&addInfo=${encodedTransferNote}&accountName=${encodedAccountName}`;

  return {
    enabled: true,
    bankBin,
    accountNumber,
    accountName,
    transferNote,
    imageUrl,
  } as const;
}

export function createMomoSignature(rawSignature: string, secretKey: string) {
  return crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');
}
