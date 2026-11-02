"""Synthetic test code for indexing (notifications, file 25)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CouponRow25:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def schedule_coupon_25_0(rows, limit=5):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def retry_coupon_25_1(rows, limit=6):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def format_coupon_25_2(rows, limit=7):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def rank_coupon_25_3(rows, limit=8):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def filter_coupon_25_4(rows, limit=9):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def validate_coupon_25_5(rows, limit=10):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CouponNotificationsHandler25:
    def __init__(self):
        self.cache = {}

    def merge_0(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def rank_1(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def export_3(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def summarize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row
