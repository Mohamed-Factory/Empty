"""Synthetic test code for indexing (billing, file 23)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class LedgerRow23:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def retry_ledger_23_0(rows, limit=5):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def filter_ledger_23_1(rows, limit=6):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_ledger_23_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def normalize_ledger_23_3(rows, limit=8):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_ledger_23_4(rows, limit=9):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def format_ledger_23_5(rows, limit=10):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class LedgerBillingHandler23:
    def __init__(self):
        self.cache = {}

    def split_0(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def load_2(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def rank_5(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row
