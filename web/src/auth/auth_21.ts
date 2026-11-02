// Synthetic test code for indexing (auth, file 21).

export interface QueryRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatQuery21_0(records: QueryRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankQuery21_1(records: QueryRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeQuery21_2(records: QueryRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeQuery21_3(records: QueryRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryQuery21_4(records: QueryRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankQuery21_5(records: QueryRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QueryAuthService21 {
  private cache = new Map<string, QueryRecord21>();

  splitQuery0(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  filterQuery1(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  mergeQuery2(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  summarizeQuery3(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  normalizeQuery4(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  formatQuery5(record: QueryRecord21): QueryRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
