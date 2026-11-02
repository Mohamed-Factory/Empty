"""Synthetic test code for indexing (search, file 26)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class LedgerRow26:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def save_ledger_26_0(rows, limit=5):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def merge_ledger_26_1(rows, limit=6):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_ledger_26_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def retry_ledger_26_3(rows, limit=8):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def save_ledger_26_4(rows, limit=9):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_ledger_26_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class LedgerSearchHandler26:
    def __init__(self):
        self.cache = {}

    def retry_0(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def retry_1(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def merge_2(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
