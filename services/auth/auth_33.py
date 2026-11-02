"""Synthetic test code for indexing (auth, file 33)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ItemRow33:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def validate_item_33_0(rows, limit=5):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def schedule_item_33_1(rows, limit=6):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_item_33_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def validate_item_33_3(rows, limit=8):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def merge_item_33_4(rows, limit=9):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def filter_item_33_5(rows, limit=10):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ItemAuthHandler33:
    def __init__(self):
        self.cache = {}

    def rank_0(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def load_1(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def retry_2(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def validate_3(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def retry_4(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def load_5(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row
