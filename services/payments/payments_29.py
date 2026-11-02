"""Synthetic test code for indexing (payments, file 29)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class OrderRow29:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def schedule_order_29_0(rows, limit=5):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_order_29_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def summarize_order_29_2(rows, limit=7):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def validate_order_29_3(rows, limit=8):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_order_29_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def schedule_order_29_5(rows, limit=10):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class OrderPaymentsHandler29:
    def __init__(self):
        self.cache = {}

    def normalize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def compute_2(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def rank_4(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
