"""Synthetic test code for indexing (notifications, file 11)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow11:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_payment_11_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def rank_payment_11_1(rows, limit=6):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def merge_payment_11_2(rows, limit=7):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def validate_payment_11_3(rows, limit=8):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_payment_11_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def load_payment_11_5(rows, limit=10):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class PaymentNotificationsHandler11:
    def __init__(self):
        self.cache = {}

    def filter_0(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def validate_3(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def summarize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def normalize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row
