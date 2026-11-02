// Synthetic test code for indexing (notifications, file 36).

export interface ItemRecord36 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportItem36_0(records: ItemRecord36[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryItem36_1(records: ItemRecord36[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeItem36_2(records: ItemRecord36[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeItem36_3(records: ItemRecord36[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleItem36_4(records: ItemRecord36[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitItem36_5(records: ItemRecord36[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemNotificationsService36 {
  private cache = new Map<string, ItemRecord36>();

  exportItem0(record: ItemRecord36): ItemRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  mergeItem1(record: ItemRecord36): ItemRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  scheduleItem2(record: ItemRecord36): ItemRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  splitItem3(record: ItemRecord36): ItemRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  exportItem4(record: ItemRecord36): ItemRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  saveItem5(record: ItemRecord36): ItemRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
