// Synthetic test code for indexing (search, file 19).

export interface PaymentRecord19 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterPayment19_0(records: PaymentRecord19[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankPayment19_1(records: PaymentRecord19[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitPayment19_2(records: PaymentRecord19[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function savePayment19_3(records: PaymentRecord19[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function savePayment19_4(records: PaymentRecord19[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankPayment19_5(records: PaymentRecord19[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentSearchService19 {
  private cache = new Map<string, PaymentRecord19>();

  loadPayment0(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  summarizePayment1(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  loadPayment2(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  formatPayment3(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  exportPayment4(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitPayment5(record: PaymentRecord19): PaymentRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
