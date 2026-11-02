// Synthetic test code for indexing (search, file 36).

export interface LedgerRecord36 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitLedger36_0(records: LedgerRecord36[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleLedger36_1(records: LedgerRecord36[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeLedger36_2(records: LedgerRecord36[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeLedger36_3(records: LedgerRecord36[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterLedger36_4(records: LedgerRecord36[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitLedger36_5(records: LedgerRecord36[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerSearchService36 {
  private cache = new Map<string, LedgerRecord36>();

  rankLedger0(record: LedgerRecord36): LedgerRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  computeLedger1(record: LedgerRecord36): LedgerRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  loadLedger2(record: LedgerRecord36): LedgerRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  retryLedger3(record: LedgerRecord36): LedgerRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  filterLedger4(record: LedgerRecord36): LedgerRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  filterLedger5(record: LedgerRecord36): LedgerRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
