"""Synthetic test code for indexing (catalog, file 32)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ItemRow32:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def compute_item_32_0(rows, limit=5):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_item_32_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def normalize_item_32_2(rows, limit=7):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def retry_item_32_3(rows, limit=8):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def filter_item_32_4(rows, limit=9):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def normalize_item_32_5(rows, limit=10):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ItemCatalogHandler32:
    def __init__(self):
        self.cache = {}

    def export_0(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
