// Synthetic test code for indexing (billing, file 26).

export interface LedgerRecord26 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportLedger26_0(records: LedgerRecord26[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadLedger26_1(records: LedgerRecord26[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveLedger26_2(records: LedgerRecord26[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryLedger26_3(records: LedgerRecord26[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportLedger26_4(records: LedgerRecord26[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeLedger26_5(records: LedgerRecord26[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerBillingService26 {
  private cache = new Map<string, LedgerRecord26>();

  validateLedger0(record: LedgerRecord26): LedgerRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  splitLedger1(record: LedgerRecord26): LedgerRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  normalizeLedger2(record: LedgerRecord26): LedgerRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeLedger3(record: LedgerRecord26): LedgerRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computeLedger4(record: LedgerRecord26): LedgerRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  exportLedger5(record: LedgerRecord26): LedgerRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
