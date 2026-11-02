"""Synthetic test code for indexing (catalog, file 10)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow10:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def save_payment_10_0(rows, limit=5):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def save_payment_10_1(rows, limit=6):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def rank_payment_10_2(rows, limit=7):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def load_payment_10_3(rows, limit=8):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def rank_payment_10_4(rows, limit=9):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_payment_10_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class PaymentCatalogHandler10:
    def __init__(self):
        self.cache = {}

    def retry_0(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def export_1(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def validate_2(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def schedule_5(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row
