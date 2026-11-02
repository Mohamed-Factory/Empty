"""Synthetic test code for indexing (shipping, file 14)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CustomerRow14:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def export_customer_14_0(rows, limit=5):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_customer_14_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_customer_14_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def normalize_customer_14_3(rows, limit=8):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def normalize_customer_14_4(rows, limit=9):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_customer_14_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CustomerShippingHandler14:
    def __init__(self):
        self.cache = {}

    def filter_0(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def export_3(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def normalize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row
