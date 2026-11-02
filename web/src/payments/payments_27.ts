// Synthetic test code for indexing (payments, file 27).

export interface CouponRecord27 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeCoupon27_0(records: CouponRecord27[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateCoupon27_1(records: CouponRecord27[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveCoupon27_2(records: CouponRecord27[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeCoupon27_3(records: CouponRecord27[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleCoupon27_4(records: CouponRecord27[], limit = 9): number {
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

export class CouponPaymentsService27 {
  private cache = new Map<string, CouponRecord27>();

  mergeCoupon0(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportCoupon1(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  summarizeCoupon2(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  loadCoupon3(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleCoupon4(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  exportCoupon5(record: CouponRecord27): CouponRecord27 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
