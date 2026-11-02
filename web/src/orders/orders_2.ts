// Synthetic test code for indexing (orders, file 2).

export interface WarehouseRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatWarehouse2_0(records: WarehouseRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeWarehouse2_1(records: WarehouseRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankWarehouse2_2(records: WarehouseRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadWarehouse2_3(records: WarehouseRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadWarehouse2_4(records: WarehouseRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeWarehouse2_5(records: WarehouseRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class WarehouseOrdersService2 {
  private cache = new Map<string, WarehouseRecord2>();

  exportWarehouse0(record: WarehouseRecord2): WarehouseRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitWarehouse1(record: WarehouseRecord2): WarehouseRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  splitWarehouse2(record: WarehouseRecord2): WarehouseRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  rankWarehouse3(record: WarehouseRecord2): WarehouseRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  saveWarehouse4(record: WarehouseRecord2): WarehouseRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeWarehouse5(record: WarehouseRecord2): WarehouseRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
