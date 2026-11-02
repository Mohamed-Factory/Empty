// Synthetic test code for indexing (search, file 4).

export interface ItemRecord4 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeItem4_0(records: ItemRecord4[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadItem4_1(records: ItemRecord4[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportItem4_2(records: ItemRecord4[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportItem4_3(records: ItemRecord4[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankItem4_4(records: ItemRecord4[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeItem4_5(records: ItemRecord4[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemSearchService4 {
  private cache = new Map<string, ItemRecord4>();

  rankItem0(record: ItemRecord4): ItemRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  saveItem1(record: ItemRecord4): ItemRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeItem2(record: ItemRecord4): ItemRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportItem3(record: ItemRecord4): ItemRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitItem4(record: ItemRecord4): ItemRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  exportItem5(record: ItemRecord4): ItemRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
