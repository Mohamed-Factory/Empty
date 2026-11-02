// Synthetic test code for indexing (orders, file 22).

export interface ItemRecord22 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitItem22_0(records: ItemRecord22[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportItem22_1(records: ItemRecord22[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveItem22_2(records: ItemRecord22[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeItem22_3(records: ItemRecord22[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitItem22_4(records: ItemRecord22[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterItem22_5(records: ItemRecord22[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemOrdersService22 {
  private cache = new Map<string, ItemRecord22>();

  splitItem0(record: ItemRecord22): ItemRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  summarizeItem1(record: ItemRecord22): ItemRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveItem2(record: ItemRecord22): ItemRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  splitItem3(record: ItemRecord22): ItemRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  exportItem4(record: ItemRecord22): ItemRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  formatItem5(record: ItemRecord22): ItemRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
