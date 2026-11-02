"""Synthetic test code for indexing (analytics, file 35)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AccountRow35:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def summarize_account_35_0(rows, limit=5):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def filter_account_35_1(rows, limit=6):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def split_account_35_2(rows, limit=7):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def export_account_35_3(rows, limit=8):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_account_35_4(rows, limit=9):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def format_account_35_5(rows, limit=10):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AccountAnalyticsHandler35:
    def __init__(self):
        self.cache = {}

    def load_0(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def split_1(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def summarize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def split_5(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row
