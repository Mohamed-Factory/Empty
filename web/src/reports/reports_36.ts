// Synthetic test code for indexing (reports, file 36).

export interface CouponRecord36 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterCoupon36_0(records: CouponRecord36[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankCoupon36_1(records: CouponRecord36[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportCoupon36_2(records: CouponRecord36[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatCoupon36_3(records: CouponRecord36[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeCoupon36_4(records: CouponRecord36[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatCoupon36_5(records: CouponRecord36[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponReportsService36 {
  private cache = new Map<string, CouponRecord36>();

  formatCoupon0(record: CouponRecord36): CouponRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  retryCoupon1(record: CouponRecord36): CouponRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  saveCoupon2(record: CouponRecord36): CouponRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  formatCoupon3(record: CouponRecord36): CouponRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  rankCoupon4(record: CouponRecord36): CouponRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  filterCoupon5(record: CouponRecord36): CouponRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
