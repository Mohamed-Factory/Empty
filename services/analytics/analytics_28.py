"""Synthetic test code for indexing (analytics, file 28)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class WarehouseRow28:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_warehouse_28_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def merge_warehouse_28_1(rows, limit=6):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def validate_warehouse_28_2(rows, limit=7):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def format_warehouse_28_3(rows, limit=8):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def merge_warehouse_28_4(rows, limit=9):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_warehouse_28_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class WarehouseAnalyticsHandler28:
    def __init__(self):
        self.cache = {}

    def export_0(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def retry_2(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def summarize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def rank_5(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row
