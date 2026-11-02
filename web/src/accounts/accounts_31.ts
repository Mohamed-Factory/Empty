// Synthetic test code for indexing (accounts, file 31).

export interface PaymentRecord31 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizePayment31_0(records: PaymentRecord31[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizePayment31_1(records: PaymentRecord31[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadPayment31_2(records: PaymentRecord31[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function schedulePayment31_3(records: PaymentRecord31[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizePayment31_4(records: PaymentRecord31[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryPayment31_5(records: PaymentRecord31[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentAccountsService31 {
  private cache = new Map<string, PaymentRecord31>();

  normalizePayment0(record: PaymentRecord31): PaymentRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  formatPayment1(record: PaymentRecord31): PaymentRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  loadPayment2(record: PaymentRecord31): PaymentRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  retryPayment3(record: PaymentRecord31): PaymentRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  splitPayment4(record: PaymentRecord31): PaymentRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  retryPayment5(record: PaymentRecord31): PaymentRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
