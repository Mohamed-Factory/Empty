// Synthetic test code for indexing (shipping, file 19).

export interface PaymentRecord19 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computePayment19_0(records: PaymentRecord19[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validatePayment19_1(records: PaymentRecord19[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizePayment19_2(records: PaymentRecord19[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryPayment19_3(records: PaymentRecord19[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computePayment19_4(records: PaymentRecord19[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadPayment19_5(records: PaymentRecord19[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentShippingService19 {
  private cache = new Map<string, PaymentRecord19>();

  retryPayment0(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  exportPayment1(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  retryPayment2(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  retryPayment3(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  filterPayment4(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitPayment5(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
