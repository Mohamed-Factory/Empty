// Synthetic test code for indexing (orders, file 7).

export interface ItemRecord7 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveItem7_0(records: ItemRecord7[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitItem7_1(records: ItemRecord7[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveItem7_2(records: ItemRecord7[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleItem7_3(records: ItemRecord7[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleItem7_4(records: ItemRecord7[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeItem7_5(records: ItemRecord7[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemOrdersService7 {
  private cache = new Map<string, ItemRecord7>();

  retryItem0(record: ItemRecord7): ItemRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateItem1(record: ItemRecord7): ItemRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  summarizeItem2(record: ItemRecord7): ItemRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  loadItem3(record: ItemRecord7): ItemRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  filterItem4(record: ItemRecord7): ItemRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  summarizeItem5(record: ItemRecord7): ItemRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
