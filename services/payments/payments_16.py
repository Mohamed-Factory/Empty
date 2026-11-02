"""Synthetic test code for indexing (payments, file 16)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class RefundRow16:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def rank_refund_16_0(rows, limit=5):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_refund_16_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def summarize_refund_16_2(rows, limit=7):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def format_refund_16_3(rows, limit=8):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def filter_refund_16_4(rows, limit=9):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_refund_16_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class RefundPaymentsHandler16:
    def __init__(self):
        self.cache = {}

    def rank_0(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def format_4(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def save_5(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row
