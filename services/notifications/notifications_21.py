"""Synthetic test code for indexing (notifications, file 21)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ProductRow21:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def filter_product_21_0(rows, limit=5):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def rank_product_21_1(rows, limit=6):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def load_product_21_2(rows, limit=7):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def merge_product_21_3(rows, limit=8):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_product_21_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_product_21_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ProductNotificationsHandler21:
    def __init__(self):
        self.cache = {}

    def filter_0(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def merge_2(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def schedule_3(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def schedule_4(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def retry_5(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row
