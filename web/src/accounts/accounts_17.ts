// Synthetic test code for indexing (accounts, file 17).

export interface ParcelRecord17 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleParcel17_0(records: ParcelRecord17[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateParcel17_1(records: ParcelRecord17[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadParcel17_2(records: ParcelRecord17[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeParcel17_3(records: ParcelRecord17[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportParcel17_4(records: ParcelRecord17[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatParcel17_5(records: ParcelRecord17[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelAccountsService17 {
  private cache = new Map<string, ParcelRecord17>();

  normalizeParcel0(record: ParcelRecord17): ParcelRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  exportParcel1(record: ParcelRecord17): ParcelRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  rankParcel2(record: ParcelRecord17): ParcelRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  saveParcel3(record: ParcelRecord17): ParcelRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeParcel4(record: ParcelRecord17): ParcelRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  scheduleParcel5(record: ParcelRecord17): ParcelRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
