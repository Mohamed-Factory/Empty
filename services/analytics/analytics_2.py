"""Synthetic test code for indexing (analytics, file 2)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CouponRow2:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def load_coupon_2_0(rows, limit=5):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def split_coupon_2_1(rows, limit=6):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def filter_coupon_2_2(rows, limit=7):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def format_coupon_2_3(rows, limit=8):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_coupon_2_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def filter_coupon_2_5(rows, limit=10):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CouponAnalyticsHandler2:
    def __init__(self):
        self.cache = {}

    def export_0(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def split_1(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def load_2(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def load_3(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def compute_4(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def merge_5(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row
