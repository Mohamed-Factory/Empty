// Synthetic test code for indexing (billing, file 15).

export interface WarehouseRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveWarehouse15_0(records: WarehouseRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportWarehouse15_1(records: WarehouseRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankWarehouse15_2(records: WarehouseRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatWarehouse15_3(records: WarehouseRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportWarehouse15_4(records: WarehouseRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankWarehouse15_5(records: WarehouseRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class WarehouseBillingService15 {
  private cache = new Map<string, WarehouseRecord15>();

  summarizeWarehouse0(record: WarehouseRecord15): WarehouseRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  filterWarehouse1(record: WarehouseRecord15): WarehouseRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  computeWarehouse2(record: WarehouseRecord15): WarehouseRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  validateWarehouse3(record: WarehouseRecord15): WarehouseRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  mergeWarehouse4(record: WarehouseRecord15): WarehouseRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  retryWarehouse5(record: WarehouseRecord15): WarehouseRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
