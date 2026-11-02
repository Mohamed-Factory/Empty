"""Synthetic test code for indexing (payments, file 11)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ProductRow11:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def rank_product_11_0(rows, limit=5):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def summarize_product_11_1(rows, limit=6):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def schedule_product_11_2(rows, limit=7):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def rank_product_11_3(rows, limit=8):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_product_11_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def validate_product_11_5(rows, limit=10):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ProductPaymentsHandler11:
    def __init__(self):
        self.cache = {}

    def split_0(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def export_1(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def compute_2(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def validate_4(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def merge_5(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row
