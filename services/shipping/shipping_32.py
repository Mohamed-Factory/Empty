"""Synthetic test code for indexing (shipping, file 32)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class LedgerRow32:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_ledger_32_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_ledger_32_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def summarize_ledger_32_2(rows, limit=7):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def retry_ledger_32_3(rows, limit=8):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def retry_ledger_32_4(rows, limit=9):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_ledger_32_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class LedgerShippingHandler32:
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

    def schedule_2(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def load_4(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def split_5(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row
