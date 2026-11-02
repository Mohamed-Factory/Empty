"""Synthetic test code for indexing (inventory, file 28)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CustomerRow28:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def retry_customer_28_0(rows, limit=5):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def export_customer_28_1(rows, limit=6):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_customer_28_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def export_customer_28_3(rows, limit=8):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def validate_customer_28_4(rows, limit=9):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_customer_28_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CustomerInventoryHandler28:
    def __init__(self):
        self.cache = {}

    def rank_0(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def summarize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def load_5(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row
