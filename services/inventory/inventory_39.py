"""Synthetic test code for indexing (inventory, file 39)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CouponRow39:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def schedule_coupon_39_0(rows, limit=5):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def export_coupon_39_1(rows, limit=6):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_coupon_39_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def load_coupon_39_3(rows, limit=8):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_coupon_39_4(rows, limit=9):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def save_coupon_39_5(rows, limit=10):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CouponInventoryHandler39:
    def __init__(self):
        self.cache = {}

    def split_0(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def save_1(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def normalize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def filter_3(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def load_5(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row
