"""Synthetic test code for indexing (orders, file 12)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class OrderRow12:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def rank_order_12_0(rows, limit=5):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def split_order_12_1(rows, limit=6):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def merge_order_12_2(rows, limit=7):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def format_order_12_3(rows, limit=8):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def schedule_order_12_4(rows, limit=9):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def load_order_12_5(rows, limit=10):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class OrderOrdersHandler12:
    def __init__(self):
        self.cache = {}

    def merge_0(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def retry_1(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def compute_4(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def schedule_5(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row
