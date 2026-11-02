"""Synthetic test code for indexing (search, file 4)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CouponRow4:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_coupon_4_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def retry_coupon_4_1(rows, limit=6):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def normalize_coupon_4_2(rows, limit=7):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def merge_coupon_4_3(rows, limit=8):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def format_coupon_4_4(rows, limit=9):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def split_coupon_4_5(rows, limit=10):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CouponSearchHandler4:
    def __init__(self):
        self.cache = {}

    def load_0(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def normalize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def compute_3(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def format_4(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def rank_5(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row
