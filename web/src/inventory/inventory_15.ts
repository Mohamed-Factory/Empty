// Synthetic test code for indexing (inventory, file 15).

export interface ItemRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeItem15_0(records: ItemRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleItem15_1(records: ItemRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeItem15_2(records: ItemRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadItem15_3(records: ItemRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveItem15_4(records: ItemRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitItem15_5(records: ItemRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemInventoryService15 {
  private cache = new Map<string, ItemRecord15>();

  computeItem0(record: ItemRecord15): ItemRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  exportItem1(record: ItemRecord15): ItemRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  saveItem2(record: ItemRecord15): ItemRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeItem3(record: ItemRecord15): ItemRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  filterItem4(record: ItemRecord15): ItemRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryItem5(record: ItemRecord15): ItemRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
