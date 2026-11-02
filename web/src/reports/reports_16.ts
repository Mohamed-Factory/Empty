// Synthetic test code for indexing (reports, file 16).

export interface PaymentRecord16 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportPayment16_0(records: PaymentRecord16[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadPayment16_1(records: PaymentRecord16[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computePayment16_2(records: PaymentRecord16[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitPayment16_3(records: PaymentRecord16[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function schedulePayment16_4(records: PaymentRecord16[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterPayment16_5(records: PaymentRecord16[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentReportsService16 {
  private cache = new Map<string, PaymentRecord16>();

  splitPayment0(record: PaymentRecord16): PaymentRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  rankPayment1(record: PaymentRecord16): PaymentRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  mergePayment2(record: PaymentRecord16): PaymentRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  schedulePayment3(record: PaymentRecord16): PaymentRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  splitPayment4(record: PaymentRecord16): PaymentRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  splitPayment5(record: PaymentRecord16): PaymentRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
