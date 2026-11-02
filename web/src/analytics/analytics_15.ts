// Synthetic test code for indexing (analytics, file 15).

export interface LedgerRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryLedger15_0(records: LedgerRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadLedger15_1(records: LedgerRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeLedger15_2(records: LedgerRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryLedger15_3(records: LedgerRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankLedger15_4(records: LedgerRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveLedger15_5(records: LedgerRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerAnalyticsService15 {
  private cache = new Map<string, LedgerRecord15>();

  computeLedger0(record: LedgerRecord15): LedgerRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  normalizeLedger1(record: LedgerRecord15): LedgerRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  saveLedger2(record: LedgerRecord15): LedgerRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeLedger3(record: LedgerRecord15): LedgerRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  saveLedger4(record: LedgerRecord15): LedgerRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeLedger5(record: LedgerRecord15): LedgerRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
