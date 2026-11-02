"""Synthetic test code for indexing (search, file 13)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CouponRow13:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_coupon_13_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def rank_coupon_13_1(rows, limit=6):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_coupon_13_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def split_coupon_13_3(rows, limit=8):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def retry_coupon_13_4(rows, limit=9):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_coupon_13_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CouponSearchHandler13:
    def __init__(self):
        self.cache = {}

    def schedule_0(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def summarize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def load_5(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row
