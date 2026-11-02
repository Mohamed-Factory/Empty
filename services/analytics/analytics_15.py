"""Synthetic test code for indexing (analytics, file 15)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow15:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_payment_15_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def filter_payment_15_1(rows, limit=6):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def split_payment_15_2(rows, limit=7):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def export_payment_15_3(rows, limit=8):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def validate_payment_15_4(rows, limit=9):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def split_payment_15_5(rows, limit=10):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class PaymentAnalyticsHandler15:
    def __init__(self):
        self.cache = {}

    def validate_0(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def summarize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def validate_3(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def schedule_4(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def retry_5(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row
