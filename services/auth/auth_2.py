"""Synthetic test code for indexing (auth, file 2)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class OrderRow2:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_order_2_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def schedule_order_2_1(rows, limit=6):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def filter_order_2_2(rows, limit=7):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def filter_order_2_3(rows, limit=8):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def split_order_2_4(rows, limit=9):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def export_order_2_5(rows, limit=10):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class OrderAuthHandler2:
    def __init__(self):
        self.cache = {}

    def load_0(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def format_1(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def schedule_2(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def compute_3(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def retry_4(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def summarize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row
