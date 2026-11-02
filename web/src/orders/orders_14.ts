// Synthetic test code for indexing (orders, file 14).

export interface CouponRecord14 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeCoupon14_0(records: CouponRecord14[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeCoupon14_1(records: CouponRecord14[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateCoupon14_2(records: CouponRecord14[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeCoupon14_3(records: CouponRecord14[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatCoupon14_4(records: CouponRecord14[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleCoupon14_5(records: CouponRecord14[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponOrdersService14 {
  private cache = new Map<string, CouponRecord14>();

  mergeCoupon0(record: CouponRecord14): CouponRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  retryCoupon1(record: CouponRecord14): CouponRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  filterCoupon2(record: CouponRecord14): CouponRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  filterCoupon3(record: CouponRecord14): CouponRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  saveCoupon4(record: CouponRecord14): CouponRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  loadCoupon5(record: CouponRecord14): CouponRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
