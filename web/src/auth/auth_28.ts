// Synthetic test code for indexing (auth, file 28).

export interface LedgerRecord28 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadLedger28_0(records: LedgerRecord28[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleLedger28_1(records: LedgerRecord28[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadLedger28_2(records: LedgerRecord28[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryLedger28_3(records: LedgerRecord28[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitLedger28_4(records: LedgerRecord28[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveLedger28_5(records: LedgerRecord28[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerAuthService28 {
  private cache = new Map<string, LedgerRecord28>();

  retryLedger0(record: LedgerRecord28): LedgerRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  scheduleLedger1(record: LedgerRecord28): LedgerRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  mergeLedger2(record: LedgerRecord28): LedgerRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  mergeLedger3(record: LedgerRecord28): LedgerRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  retryLedger4(record: LedgerRecord28): LedgerRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  retryLedger5(record: LedgerRecord28): LedgerRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
