"""Synthetic test code for indexing (billing, file 0)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class OrderRow0:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_order_0_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_order_0_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def rank_order_0_2(rows, limit=7):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def compute_order_0_3(rows, limit=8):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def rank_order_0_4(rows, limit=9):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def save_order_0_5(rows, limit=10):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class OrderBillingHandler0:
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

    def summarize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def export_3(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def split_4(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def filter_5(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row
