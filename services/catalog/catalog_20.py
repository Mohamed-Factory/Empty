"""Synthetic test code for indexing (catalog, file 20)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class LedgerRow20:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def save_ledger_20_0(rows, limit=5):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_ledger_20_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_ledger_20_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def load_ledger_20_3(rows, limit=8):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_ledger_20_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def compute_ledger_20_5(rows, limit=10):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class LedgerCatalogHandler20:
    def __init__(self):
        self.cache = {}

    def format_0(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def load_1(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def validate_3(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def format_4(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
