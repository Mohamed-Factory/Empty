// Synthetic test code for indexing (reports, file 11).

export interface PaymentRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitPayment11_0(records: PaymentRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function savePayment11_1(records: PaymentRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterPayment11_2(records: PaymentRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function savePayment11_3(records: PaymentRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankPayment11_4(records: PaymentRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportPayment11_5(records: PaymentRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentReportsService11 {
  private cache = new Map<string, PaymentRecord11>();

  filterPayment0(record: PaymentRecord11): PaymentRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryPayment1(record: PaymentRecord11): PaymentRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  exportPayment2(record: PaymentRecord11): PaymentRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitPayment3(record: PaymentRecord11): PaymentRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  mergePayment4(record: PaymentRecord11): PaymentRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  normalizePayment5(record: PaymentRecord11): PaymentRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
