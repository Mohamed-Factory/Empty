// Synthetic test code for indexing (auth, file 2).

export interface ItemRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateItem2_0(records: ItemRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeItem2_1(records: ItemRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportItem2_2(records: ItemRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeItem2_3(records: ItemRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitItem2_4(records: ItemRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitItem2_5(records: ItemRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ItemAuthService2 {
  private cache = new Map<string, ItemRecord2>();

  mergeItem0(record: ItemRecord2): ItemRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  validateItem1(record: ItemRecord2): ItemRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  splitItem2(record: ItemRecord2): ItemRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  scheduleItem3(record: ItemRecord2): ItemRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  summarizeItem4(record: ItemRecord2): ItemRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  computeItem5(record: ItemRecord2): ItemRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
