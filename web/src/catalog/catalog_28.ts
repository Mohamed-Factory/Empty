// Synthetic test code for indexing (catalog, file 28).

export interface ParcelRecord28 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitParcel28_0(records: ParcelRecord28[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadParcel28_1(records: ParcelRecord28[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterParcel28_2(records: ParcelRecord28[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeParcel28_3(records: ParcelRecord28[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportParcel28_4(records: ParcelRecord28[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleParcel28_5(records: ParcelRecord28[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelCatalogService28 {
  private cache = new Map<string, ParcelRecord28>();

  loadParcel0(record: ParcelRecord28): ParcelRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleParcel1(record: ParcelRecord28): ParcelRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  splitParcel2(record: ParcelRecord28): ParcelRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  scheduleParcel3(record: ParcelRecord28): ParcelRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  summarizeParcel4(record: ParcelRecord28): ParcelRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  scheduleParcel5(record: ParcelRecord28): ParcelRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
