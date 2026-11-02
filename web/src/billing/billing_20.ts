// Synthetic test code for indexing (billing, file 20).

export interface ItemRecord20 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeItem20_0(records: ItemRecord20[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadItem20_1(records: ItemRecord20[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterItem20_2(records: ItemRecord20[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeItem20_3(records: ItemRecord20[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeItem20_4(records: ItemRecord20[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterItem20_5(records: ItemRecord20[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemBillingService20 {
  private cache = new Map<string, ItemRecord20>();

  computeItem0(record: ItemRecord20): ItemRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  loadItem1(record: ItemRecord20): ItemRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  saveItem2(record: ItemRecord20): ItemRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  scheduleItem3(record: ItemRecord20): ItemRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  rankItem4(record: ItemRecord20): ItemRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  loadItem5(record: ItemRecord20): ItemRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
