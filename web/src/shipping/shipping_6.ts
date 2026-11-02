// Synthetic test code for indexing (shipping, file 6).

export interface PaymentRecord6 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatPayment6_0(records: PaymentRecord6[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportPayment6_1(records: PaymentRecord6[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizePayment6_2(records: PaymentRecord6[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportPayment6_3(records: PaymentRecord6[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function schedulePayment6_4(records: PaymentRecord6[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankPayment6_5(records: PaymentRecord6[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentShippingService6 {
  private cache = new Map<string, PaymentRecord6>();

  savePayment0(record: PaymentRecord6): PaymentRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  exportPayment1(record: PaymentRecord6): PaymentRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  computePayment2(record: PaymentRecord6): PaymentRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  validatePayment3(record: PaymentRecord6): PaymentRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  formatPayment4(record: PaymentRecord6): PaymentRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  schedulePayment5(record: PaymentRecord6): PaymentRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
