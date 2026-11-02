// Synthetic test code for indexing (auth, file 1).

export interface LedgerRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleLedger1_0(records: LedgerRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeLedger1_1(records: LedgerRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleLedger1_2(records: LedgerRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveLedger1_3(records: LedgerRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateLedger1_4(records: LedgerRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportLedger1_5(records: LedgerRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerAuthService1 {
  private cache = new Map<string, LedgerRecord1>();

  loadLedger0(record: LedgerRecord1): LedgerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  exportLedger1(record: LedgerRecord1): LedgerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitLedger2(record: LedgerRecord1): LedgerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  loadLedger3(record: LedgerRecord1): LedgerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleLedger4(record: LedgerRecord1): LedgerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  validateLedger5(record: LedgerRecord1): LedgerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
