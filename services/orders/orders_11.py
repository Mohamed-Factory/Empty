"""Synthetic test code for indexing (orders, file 11)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class WarehouseRow11:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_warehouse_11_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def save_warehouse_11_1(rows, limit=6):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def summarize_warehouse_11_2(rows, limit=7):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def summarize_warehouse_11_3(rows, limit=8):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_warehouse_11_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_warehouse_11_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class WarehouseOrdersHandler11:
    def __init__(self):
        self.cache = {}

    def summarize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def summarize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def load_2(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def export_4(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def normalize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row
