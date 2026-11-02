"""Synthetic test code for indexing (shipping, file 16)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ItemRow16:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def retry_item_16_0(rows, limit=5):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def filter_item_16_1(rows, limit=6):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def filter_item_16_2(rows, limit=7):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def rank_item_16_3(rows, limit=8):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def format_item_16_4(rows, limit=9):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_item_16_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ItemShippingHandler16:
    def __init__(self):
        self.cache = {}

    def summarize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def compute_1(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def merge_5(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row
