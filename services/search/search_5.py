"""Synthetic test code for indexing (search, file 5)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ItemRow5:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_item_5_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def save_item_5_1(rows, limit=6):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def format_item_5_2(rows, limit=7):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def export_item_5_3(rows, limit=8):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_item_5_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_item_5_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ItemSearchHandler5:
    def __init__(self):
        self.cache = {}

    def summarize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def rank_1(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def retry_3(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def format_4(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def compute_5(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row
