// Synthetic test code for indexing (billing, file 0).

export interface ParcelRecord0 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadParcel0_0(records: ParcelRecord0[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleParcel0_1(records: ParcelRecord0[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatParcel0_2(records: ParcelRecord0[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeParcel0_3(records: ParcelRecord0[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeParcel0_4(records: ParcelRecord0[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateParcel0_5(records: ParcelRecord0[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelBillingService0 {
  private cache = new Map<string, ParcelRecord0>();

  scheduleParcel0(record: ParcelRecord0): ParcelRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  saveParcel1(record: ParcelRecord0): ParcelRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankParcel2(record: ParcelRecord0): ParcelRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  scheduleParcel3(record: ParcelRecord0): ParcelRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  summarizeParcel4(record: ParcelRecord0): ParcelRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveParcel5(record: ParcelRecord0): ParcelRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
