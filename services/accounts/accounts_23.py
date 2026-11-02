"""Synthetic test code for indexing (accounts, file 23)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ProductRow23:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_product_23_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def normalize_product_23_1(rows, limit=6):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def normalize_product_23_2(rows, limit=7):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def split_product_23_3(rows, limit=8):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_product_23_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def schedule_product_23_5(rows, limit=10):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ProductAccountsHandler23:
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

    def filter_2(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def load_3(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def summarize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
