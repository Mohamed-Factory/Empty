// Synthetic test code for indexing (shipping, file 16).

export interface CouponRecord16 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitCoupon16_0(records: CouponRecord16[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportCoupon16_1(records: CouponRecord16[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeCoupon16_2(records: CouponRecord16[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeCoupon16_3(records: CouponRecord16[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatCoupon16_4(records: CouponRecord16[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeCoupon16_5(records: CouponRecord16[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponShippingService16 {
  private cache = new Map<string, CouponRecord16>();

  normalizeCoupon0(record: CouponRecord16): CouponRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  formatCoupon1(record: CouponRecord16): CouponRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  rankCoupon2(record: CouponRecord16): CouponRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizeCoupon3(record: CouponRecord16): CouponRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  exportCoupon4(record: CouponRecord16): CouponRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  filterCoupon5(record: CouponRecord16): CouponRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
