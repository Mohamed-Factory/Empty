// Synthetic test code for indexing (orders, file 31).

export interface ItemRecord31 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeItem31_0(records: ItemRecord31[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankItem31_1(records: ItemRecord31[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateItem31_2(records: ItemRecord31[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadItem31_3(records: ItemRecord31[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeItem31_4(records: ItemRecord31[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleItem31_5(records: ItemRecord31[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemOrdersService31 {
  private cache = new Map<string, ItemRecord31>();

  normalizeItem0(record: ItemRecord31): ItemRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeItem1(record: ItemRecord31): ItemRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  summarizeItem2(record: ItemRecord31): ItemRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  summarizeItem3(record: ItemRecord31): ItemRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  filterItem4(record: ItemRecord31): ItemRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  validateItem5(record: ItemRecord31): ItemRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
