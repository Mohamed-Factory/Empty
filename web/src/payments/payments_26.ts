// Synthetic test code for indexing (payments, file 26).

export interface ParcelRecord26 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportParcel26_0(records: ParcelRecord26[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeParcel26_1(records: ParcelRecord26[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterParcel26_2(records: ParcelRecord26[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveParcel26_3(records: ParcelRecord26[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadParcel26_4(records: ParcelRecord26[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeParcel26_5(records: ParcelRecord26[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelPaymentsService26 {
  private cache = new Map<string, ParcelRecord26>();

  loadParcel0(record: ParcelRecord26): ParcelRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  exportParcel1(record: ParcelRecord26): ParcelRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  loadParcel2(record: ParcelRecord26): ParcelRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  validateParcel3(record: ParcelRecord26): ParcelRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  saveParcel4(record: ParcelRecord26): ParcelRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeParcel5(record: ParcelRecord26): ParcelRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
