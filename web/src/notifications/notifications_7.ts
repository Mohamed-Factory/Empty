// Synthetic test code for indexing (notifications, file 7).

export interface PaymentRecord7 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function schedulePayment7_0(records: PaymentRecord7[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitPayment7_1(records: PaymentRecord7[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizePayment7_2(records: PaymentRecord7[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryPayment7_3(records: PaymentRecord7[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function savePayment7_4(records: PaymentRecord7[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterPayment7_5(records: PaymentRecord7[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class PaymentNotificationsService7 {
  private cache = new Map<string, PaymentRecord7>();

  rankPayment0(record: PaymentRecord7): PaymentRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizePayment1(record: PaymentRecord7): PaymentRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankPayment2(record: PaymentRecord7): PaymentRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizePayment3(record: PaymentRecord7): PaymentRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  rankPayment4(record: PaymentRecord7): PaymentRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizePayment5(record: PaymentRecord7): PaymentRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
