"""Synthetic test code for indexing (payments, file 38)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class RefundRow38:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def format_refund_38_0(rows, limit=5):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def load_refund_38_1(rows, limit=6):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def validate_refund_38_2(rows, limit=7):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def merge_refund_38_3(rows, limit=8):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_refund_38_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def export_refund_38_5(rows, limit=10):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class RefundPaymentsHandler38:
    def __init__(self):
        self.cache = {}

    def export_0(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def summarize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def compute_2(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def schedule_4(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def summarize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row
