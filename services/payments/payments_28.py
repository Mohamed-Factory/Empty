"""Synthetic test code for indexing (payments, file 28)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow28:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def filter_payment_28_0(rows, limit=5):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def normalize_payment_28_1(rows, limit=6):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def schedule_payment_28_2(rows, limit=7):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def merge_payment_28_3(rows, limit=8):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def export_payment_28_4(rows, limit=9):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def load_payment_28_5(rows, limit=10):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class PaymentPaymentsHandler28:
    def __init__(self):
        self.cache = {}

    def save_0(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def schedule_1(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def filter_2(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def summarize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def schedule_5(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row
