// Synthetic test code for indexing (reports, file 0).

export interface LedgerRecord0 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeLedger0_0(records: LedgerRecord0[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadLedger0_1(records: LedgerRecord0[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateLedger0_2(records: LedgerRecord0[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadLedger0_3(records: LedgerRecord0[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeLedger0_4(records: LedgerRecord0[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankLedger0_5(records: LedgerRecord0[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerReportsService0 {
  private cache = new Map<string, LedgerRecord0>();

  loadLedger0(record: LedgerRecord0): LedgerRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  saveLedger1(record: LedgerRecord0): LedgerRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  splitLedger2(record: LedgerRecord0): LedgerRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  loadLedger3(record: LedgerRecord0): LedgerRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  saveLedger4(record: LedgerRecord0): LedgerRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  splitLedger5(record: LedgerRecord0): LedgerRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
