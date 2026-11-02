// Synthetic test code for indexing (billing, file 17).

export interface PaymentRecord17 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computePayment17_0(records: PaymentRecord17[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadPayment17_1(records: PaymentRecord17[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computePayment17_2(records: PaymentRecord17[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterPayment17_3(records: PaymentRecord17[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function savePayment17_4(records: PaymentRecord17[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function savePayment17_5(records: PaymentRecord17[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentBillingService17 {
  private cache = new Map<string, PaymentRecord17>();

  schedulePayment0(record: PaymentRecord17): PaymentRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  normalizePayment1(record: PaymentRecord17): PaymentRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  exportPayment2(record: PaymentRecord17): PaymentRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  savePayment3(record: PaymentRecord17): PaymentRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  retryPayment4(record: PaymentRecord17): PaymentRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  summarizePayment5(record: PaymentRecord17): PaymentRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
