"""Synthetic test code for indexing (payments, file 31)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class InvoiceRow31:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def validate_invoice_31_0(rows, limit=5):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def filter_invoice_31_1(rows, limit=6):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_invoice_31_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def summarize_invoice_31_3(rows, limit=8):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def save_invoice_31_4(rows, limit=9):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def compute_invoice_31_5(rows, limit=10):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class InvoicePaymentsHandler31:
    def __init__(self):
        self.cache = {}

    def compute_0(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def save_1(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def normalize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def load_3(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def export_4(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def summarize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row
