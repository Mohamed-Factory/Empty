// Synthetic test code for indexing (catalog, file 17).

export interface CouponRecord17 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitCoupon17_0(records: CouponRecord17[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadCoupon17_1(records: CouponRecord17[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterCoupon17_2(records: CouponRecord17[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeCoupon17_3(records: CouponRecord17[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveCoupon17_4(records: CouponRecord17[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatCoupon17_5(records: CouponRecord17[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponCatalogService17 {
  private cache = new Map<string, CouponRecord17>();

  saveCoupon0(record: CouponRecord17): CouponRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  summarizeCoupon1(record: CouponRecord17): CouponRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveCoupon2(record: CouponRecord17): CouponRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankCoupon3(record: CouponRecord17): CouponRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizeCoupon4(record: CouponRecord17): CouponRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  splitCoupon5(record: CouponRecord17): CouponRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
