"""Synthetic test code for indexing (analytics, file 13)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class CustomerRow13:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def normalize_customer_13_0(rows, limit=5):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def load_customer_13_1(rows, limit=6):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def format_customer_13_2(rows, limit=7):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_customer_13_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def rank_customer_13_4(rows, limit=9):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def merge_customer_13_5(rows, limit=10):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class CustomerAnalyticsHandler13:
    def __init__(self):
        self.cache = {}

    def load_0(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def export_2(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def compute_3(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def validate_4(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def filter_5(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row
