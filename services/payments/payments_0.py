"""Synthetic test code for indexing (payments, file 0)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow0:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def compute_payment_0_0(rows, limit=5):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def split_payment_0_1(rows, limit=6):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def validate_payment_0_2(rows, limit=7):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def filter_payment_0_3(rows, limit=8):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def format_payment_0_4(rows, limit=9):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_payment_0_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class PaymentPaymentsHandler0:
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

    def summarize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def save_4(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def rank_5(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row
