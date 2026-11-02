"""Synthetic test code for indexing (orders, file 37)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow37:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def normalize_payment_37_0(rows, limit=5):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_payment_37_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_payment_37_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def retry_payment_37_3(rows, limit=8):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def rank_payment_37_4(rows, limit=9):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def split_payment_37_5(rows, limit=10):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class PaymentOrdersHandler37:
    def __init__(self):
        self.cache = {}

    def format_0(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def schedule_3(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def load_4(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
