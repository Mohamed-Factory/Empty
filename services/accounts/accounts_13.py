"""Synthetic test code for indexing (accounts, file 13)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class PaymentRow13:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_payment_13_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def split_payment_13_1(rows, limit=6):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def rank_payment_13_2(rows, limit=7):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def merge_payment_13_3(rows, limit=8):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def save_payment_13_4(rows, limit=9):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def save_payment_13_5(rows, limit=10):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class PaymentAccountsHandler13:
    def __init__(self):
        self.cache = {}

    def summarize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def rank_1(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def load_3(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def export_4(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
