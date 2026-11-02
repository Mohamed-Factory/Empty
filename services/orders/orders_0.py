"""Synthetic test code for indexing (orders, file 0)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow0:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def retry_payment_0_0(rows, limit=5):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def schedule_payment_0_1(rows, limit=6):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_payment_0_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def normalize_payment_0_3(rows, limit=8):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_payment_0_4(rows, limit=9):
    """Compute up to `limit` rows."""
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


class PaymentOrdersHandler0:
    def __init__(self):
        self.cache = {}

    def compute_0(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def format_1(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def retry_2(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def retry_3(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
