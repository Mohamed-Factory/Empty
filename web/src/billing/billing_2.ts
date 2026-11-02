// Synthetic test code for indexing (billing, file 2).

export interface LedgerRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitLedger2_0(records: LedgerRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeLedger2_1(records: LedgerRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeLedger2_2(records: LedgerRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterLedger2_3(records: LedgerRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatLedger2_4(records: LedgerRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryLedger2_5(records: LedgerRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerBillingService2 {
  private cache = new Map<string, LedgerRecord2>();

  exportLedger0(record: LedgerRecord2): LedgerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  loadLedger1(record: LedgerRecord2): LedgerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  retryLedger2(record: LedgerRecord2): LedgerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  retryLedger3(record: LedgerRecord2): LedgerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateLedger4(record: LedgerRecord2): LedgerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  scheduleLedger5(record: LedgerRecord2): LedgerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
