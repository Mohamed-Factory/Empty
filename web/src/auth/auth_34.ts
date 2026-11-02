// Synthetic test code for indexing (auth, file 34).

export interface CouponRecord34 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadCoupon34_0(records: CouponRecord34[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadCoupon34_1(records: CouponRecord34[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleCoupon34_2(records: CouponRecord34[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportCoupon34_3(records: CouponRecord34[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeCoupon34_4(records: CouponRecord34[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterCoupon34_5(records: CouponRecord34[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponAuthService34 {
  private cache = new Map<string, CouponRecord34>();

  validateCoupon0(record: CouponRecord34): CouponRecord34 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  saveCoupon1(record: CouponRecord34): CouponRecord34 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  scheduleCoupon2(record: CouponRecord34): CouponRecord34 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  filterCoupon3(record: CouponRecord34): CouponRecord34 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryCoupon4(record: CouponRecord34): CouponRecord34 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  splitCoupon5(record: CouponRecord34): CouponRecord34 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
