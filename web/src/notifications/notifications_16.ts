// Synthetic test code for indexing (notifications, file 16).

export interface LedgerRecord16 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeLedger16_0(records: LedgerRecord16[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatLedger16_1(records: LedgerRecord16[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatLedger16_2(records: LedgerRecord16[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadLedger16_3(records: LedgerRecord16[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatLedger16_4(records: LedgerRecord16[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterLedger16_5(records: LedgerRecord16[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class LedgerNotificationsService16 {
  private cache = new Map<string, LedgerRecord16>();

  splitLedger0(record: LedgerRecord16): LedgerRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  retryLedger1(record: LedgerRecord16): LedgerRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  computeLedger2(record: LedgerRecord16): LedgerRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  filterLedger3(record: LedgerRecord16): LedgerRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  scheduleLedger4(record: LedgerRecord16): LedgerRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  saveLedger5(record: LedgerRecord16): LedgerRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
