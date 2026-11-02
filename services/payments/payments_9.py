"""Synthetic test code for indexing (payments, file 9)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class RefundRow9:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def normalize_refund_9_0(rows, limit=5):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def schedule_refund_9_1(rows, limit=6):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def merge_refund_9_2(rows, limit=7):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def summarize_refund_9_3(rows, limit=8):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def format_refund_9_4(rows, limit=9):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_refund_9_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class RefundPaymentsHandler9:
    def __init__(self):
        self.cache = {}

    def normalize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def format_1(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def merge_2(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def load_4(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
