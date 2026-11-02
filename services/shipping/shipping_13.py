"""Synthetic test code for indexing (shipping, file 13)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ItemRow13:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def retry_item_13_0(rows, limit=5):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def normalize_item_13_1(rows, limit=6):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def merge_item_13_2(rows, limit=7):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def compute_item_13_3(rows, limit=8):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def merge_item_13_4(rows, limit=9):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def format_item_13_5(rows, limit=10):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ItemShippingHandler13:
    def __init__(self):
        self.cache = {}

    def load_0(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def summarize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def compute_2(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def summarize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def rank_4(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def split_5(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row
