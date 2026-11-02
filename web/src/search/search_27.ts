// Synthetic test code for indexing (search, file 27).

export interface CouponRecord27 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeCoupon27_0(records: CouponRecord27[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeCoupon27_1(records: CouponRecord27[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeCoupon27_2(records: CouponRecord27[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankCoupon27_3(records: CouponRecord27[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeCoupon27_4(records: CouponRecord27[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryCoupon27_5(records: CouponRecord27[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponSearchService27 {
  private cache = new Map<string, CouponRecord27>();

  saveCoupon0(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeCoupon1(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  computeCoupon2(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankCoupon3(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeCoupon4(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  scheduleCoupon5(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
