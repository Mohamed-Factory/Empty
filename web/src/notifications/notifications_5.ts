// Synthetic test code for indexing (notifications, file 5).

export interface LedgerRecord5 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadLedger5_0(records: LedgerRecord5[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryLedger5_1(records: LedgerRecord5[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadLedger5_2(records: LedgerRecord5[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitLedger5_3(records: LedgerRecord5[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveLedger5_4(records: LedgerRecord5[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitLedger5_5(records: LedgerRecord5[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerNotificationsService5 {
  private cache = new Map<string, LedgerRecord5>();

  normalizeLedger0(record: LedgerRecord5): LedgerRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  mergeLedger1(record: LedgerRecord5): LedgerRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportLedger2(record: LedgerRecord5): LedgerRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitLedger3(record: LedgerRecord5): LedgerRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  normalizeLedger4(record: LedgerRecord5): LedgerRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeLedger5(record: LedgerRecord5): LedgerRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
