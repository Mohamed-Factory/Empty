// Synthetic test code for indexing (orders, file 9).

export interface PaymentRecord9 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterPayment9_0(records: PaymentRecord9[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatPayment9_1(records: PaymentRecord9[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergePayment9_2(records: PaymentRecord9[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function savePayment9_3(records: PaymentRecord9[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterPayment9_4(records: PaymentRecord9[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizePayment9_5(records: PaymentRecord9[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentOrdersService9 {
  private cache = new Map<string, PaymentRecord9>();

  computePayment0(record: PaymentRecord9): PaymentRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  validatePayment1(record: PaymentRecord9): PaymentRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  rankPayment2(record: PaymentRecord9): PaymentRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizePayment3(record: PaymentRecord9): PaymentRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computePayment4(record: PaymentRecord9): PaymentRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  exportPayment5(record: PaymentRecord9): PaymentRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
