// Synthetic test code for indexing (auth, file 11).

export interface WarehouseRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryWarehouse11_0(records: WarehouseRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateWarehouse11_1(records: WarehouseRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadWarehouse11_2(records: WarehouseRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterWarehouse11_3(records: WarehouseRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadWarehouse11_4(records: WarehouseRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeWarehouse11_5(records: WarehouseRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class WarehouseAuthService11 {
  private cache = new Map<string, WarehouseRecord11>();

  summarizeWarehouse0(record: WarehouseRecord11): WarehouseRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  retryWarehouse1(record: WarehouseRecord11): WarehouseRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  computeWarehouse2(record: WarehouseRecord11): WarehouseRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  loadWarehouse3(record: WarehouseRecord11): WarehouseRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizeWarehouse4(record: WarehouseRecord11): WarehouseRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  exportWarehouse5(record: WarehouseRecord11): WarehouseRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
