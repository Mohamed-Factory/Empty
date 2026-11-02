// Synthetic test code for indexing (auth, file 13).

export interface ParcelRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleParcel13_0(records: ParcelRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleParcel13_1(records: ParcelRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportParcel13_2(records: ParcelRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveParcel13_3(records: ParcelRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeParcel13_4(records: ParcelRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitParcel13_5(records: ParcelRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelAuthService13 {
  private cache = new Map<string, ParcelRecord13>();

  normalizeParcel0(record: ParcelRecord13): ParcelRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  formatParcel1(record: ParcelRecord13): ParcelRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  saveParcel2(record: ParcelRecord13): ParcelRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  exportParcel3(record: ParcelRecord13): ParcelRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  validateParcel4(record: ParcelRecord13): ParcelRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  formatParcel5(record: ParcelRecord13): ParcelRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
