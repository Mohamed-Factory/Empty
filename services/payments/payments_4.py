"""Synthetic test code for indexing (payments, file 4)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class InvoiceRow4:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def save_invoice_4_0(rows, limit=5):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_invoice_4_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def summarize_invoice_4_2(rows, limit=7):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_invoice_4_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def filter_invoice_4_4(rows, limit=9):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def normalize_invoice_4_5(rows, limit=10):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class InvoicePaymentsHandler4:
    def __init__(self):
        self.cache = {}

    def schedule_0(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def format_1(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def export_2(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def schedule_3(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def compute_4(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
