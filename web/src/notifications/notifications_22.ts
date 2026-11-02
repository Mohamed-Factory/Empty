// Synthetic test code for indexing (notifications, file 22).

export interface PaymentRecord22 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportPayment22_0(records: PaymentRecord22[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitPayment22_1(records: PaymentRecord22[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitPayment22_2(records: PaymentRecord22[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergePayment22_3(records: PaymentRecord22[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportPayment22_4(records: PaymentRecord22[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportPayment22_5(records: PaymentRecord22[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentNotificationsService22 {
  private cache = new Map<string, PaymentRecord22>();

  savePayment0(record: PaymentRecord22): PaymentRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankPayment1(record: PaymentRecord22): PaymentRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  computePayment2(record: PaymentRecord22): PaymentRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  exportPayment3(record: PaymentRecord22): PaymentRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitPayment4(record: PaymentRecord22): PaymentRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  formatPayment5(record: PaymentRecord22): PaymentRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
