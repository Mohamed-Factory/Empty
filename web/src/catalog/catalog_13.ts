// Synthetic test code for indexing (catalog, file 13).

export interface PaymentRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportPayment13_0(records: PaymentRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportPayment13_1(records: PaymentRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computePayment13_2(records: PaymentRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validatePayment13_3(records: PaymentRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterPayment13_4(records: PaymentRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizePayment13_5(records: PaymentRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentCatalogService13 {
  private cache = new Map<string, PaymentRecord13>();

  computePayment0(record: PaymentRecord13): PaymentRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  filterPayment1(record: PaymentRecord13): PaymentRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  mergePayment2(record: PaymentRecord13): PaymentRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  formatPayment3(record: PaymentRecord13): PaymentRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  validatePayment4(record: PaymentRecord13): PaymentRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  schedulePayment5(record: PaymentRecord13): PaymentRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
