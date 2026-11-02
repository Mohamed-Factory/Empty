"""Synthetic test code for indexing (analytics, file 32)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AccountRow32:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def export_account_32_0(rows, limit=5):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def rank_account_32_1(rows, limit=6):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_account_32_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def retry_account_32_3(rows, limit=8):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_account_32_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def compute_account_32_5(rows, limit=10):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AccountAnalyticsHandler32:
    def __init__(self):
        self.cache = {}

    def schedule_0(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def schedule_1(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def merge_2(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def summarize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def retry_5(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row
