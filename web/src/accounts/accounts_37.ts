// Synthetic test code for indexing (accounts, file 37).

export interface PaymentRecord37 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatPayment37_0(records: PaymentRecord37[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validatePayment37_1(records: PaymentRecord37[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function schedulePayment37_2(records: PaymentRecord37[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizePayment37_3(records: PaymentRecord37[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function schedulePayment37_4(records: PaymentRecord37[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadPayment37_5(records: PaymentRecord37[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentAccountsService37 {
  private cache = new Map<string, PaymentRecord37>();

  computePayment0(record: PaymentRecord37): PaymentRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  savePayment1(record: PaymentRecord37): PaymentRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  validatePayment2(record: PaymentRecord37): PaymentRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  loadPayment3(record: PaymentRecord37): PaymentRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizePayment4(record: PaymentRecord37): PaymentRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computePayment5(record: PaymentRecord37): PaymentRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
