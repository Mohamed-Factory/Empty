// Synthetic test code for indexing (search, file 17).

export interface QueryRecord17 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveQuery17_0(records: QueryRecord17[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryQuery17_1(records: QueryRecord17[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterQuery17_2(records: QueryRecord17[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterQuery17_3(records: QueryRecord17[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeQuery17_4(records: QueryRecord17[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryQuery17_5(records: QueryRecord17[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuerySearchService17 {
  private cache = new Map<string, QueryRecord17>();

  saveQuery0(record: QueryRecord17): QueryRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankQuery1(record: QueryRecord17): QueryRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeQuery2(record: QueryRecord17): QueryRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterQuery3(record: QueryRecord17): QueryRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  saveQuery4(record: QueryRecord17): QueryRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveQuery5(record: QueryRecord17): QueryRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
