// Synthetic test code for indexing (shipping, file 18).

export interface PaymentRecord18 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatPayment18_0(records: PaymentRecord18[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankPayment18_1(records: PaymentRecord18[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function savePayment18_2(records: PaymentRecord18[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizePayment18_3(records: PaymentRecord18[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function savePayment18_4(records: PaymentRecord18[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergePayment18_5(records: PaymentRecord18[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentShippingService18 {
  private cache = new Map<string, PaymentRecord18>();

  formatPayment0(record: PaymentRecord18): PaymentRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  rankPayment1(record: PaymentRecord18): PaymentRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  mergePayment2(record: PaymentRecord18): PaymentRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportPayment3(record: PaymentRecord18): PaymentRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  formatPayment4(record: PaymentRecord18): PaymentRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  formatPayment5(record: PaymentRecord18): PaymentRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
