// Synthetic test code for indexing (orders, file 21).

export interface CouponRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatCoupon21_0(records: CouponRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveCoupon21_1(records: CouponRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitCoupon21_2(records: CouponRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadCoupon21_3(records: CouponRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeCoupon21_4(records: CouponRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateCoupon21_5(records: CouponRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponOrdersService21 {
  private cache = new Map<string, CouponRecord21>();

  retryCoupon0(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  filterCoupon1(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  normalizeCoupon2(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  exportCoupon3(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  scheduleCoupon4(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  mergeCoupon5(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
