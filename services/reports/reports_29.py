"""Synthetic test code for indexing (reports, file 29)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class InvoiceRow29:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def normalize_invoice_29_0(rows, limit=5):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def summarize_invoice_29_1(rows, limit=6):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_invoice_29_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def save_invoice_29_3(rows, limit=8):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_invoice_29_4(rows, limit=9):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def schedule_invoice_29_5(rows, limit=10):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class InvoiceReportsHandler29:
    def __init__(self):
        self.cache = {}

    def normalize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def filter_1(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def filter_2(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def split_4(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def compute_5(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row
