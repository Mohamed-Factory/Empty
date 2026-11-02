"""Synthetic test code for indexing (payments, file 20)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class OrderRow20:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def normalize_order_20_0(rows, limit=5):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def merge_order_20_1(rows, limit=6):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_order_20_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def retry_order_20_3(rows, limit=8):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def rank_order_20_4(rows, limit=9):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_order_20_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class OrderPaymentsHandler20:
    def __init__(self):
        self.cache = {}

    def split_0(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def split_1(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def split_2(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def save_3(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def format_4(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def format_5(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row
