// Synthetic test code for indexing (auth, file 3).

export interface PaymentRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function savePayment3_0(records: PaymentRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergePayment3_1(records: PaymentRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportPayment3_2(records: PaymentRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergePayment3_3(records: PaymentRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterPayment3_4(records: PaymentRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterPayment3_5(records: PaymentRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentAuthService3 {
  private cache = new Map<string, PaymentRecord3>();

  filterPayment0(record: PaymentRecord3): PaymentRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  savePayment1(record: PaymentRecord3): PaymentRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  schedulePayment2(record: PaymentRecord3): PaymentRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  loadPayment3(record: PaymentRecord3): PaymentRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  savePayment4(record: PaymentRecord3): PaymentRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  schedulePayment5(record: PaymentRecord3): PaymentRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
