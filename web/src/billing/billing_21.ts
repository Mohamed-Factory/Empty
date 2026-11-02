// Synthetic test code for indexing (billing, file 21).

export interface QueryRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveQuery21_0(records: QueryRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadQuery21_1(records: QueryRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportQuery21_2(records: QueryRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeQuery21_3(records: QueryRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveQuery21_4(records: QueryRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeQuery21_5(records: QueryRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QueryBillingService21 {
  private cache = new Map<string, QueryRecord21>();

  computeQuery0(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  formatQuery1(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  rankQuery2(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeQuery3(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computeQuery4(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  summarizeQuery5(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
