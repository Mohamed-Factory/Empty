// Synthetic test code for indexing (catalog, file 15).

export interface CouponRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleCoupon15_0(records: CouponRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateCoupon15_1(records: CouponRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeCoupon15_2(records: CouponRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeCoupon15_3(records: CouponRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveCoupon15_4(records: CouponRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankCoupon15_5(records: CouponRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponCatalogService15 {
  private cache = new Map<string, CouponRecord15>();

  scheduleCoupon0(record: CouponRecord15): CouponRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  formatCoupon1(record: CouponRecord15): CouponRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  rankCoupon2(record: CouponRecord15): CouponRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  scheduleCoupon3(record: CouponRecord15): CouponRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  rankCoupon4(record: CouponRecord15): CouponRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  computeCoupon5(record: CouponRecord15): CouponRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
