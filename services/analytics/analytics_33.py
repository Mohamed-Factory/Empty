"""Synthetic test code for indexing (analytics, file 33)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AccountRow33:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def filter_account_33_0(rows, limit=5):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def export_account_33_1(rows, limit=6):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def summarize_account_33_2(rows, limit=7):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def summarize_account_33_3(rows, limit=8):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_account_33_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_account_33_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AccountAnalyticsHandler33:
    def __init__(self):
        self.cache = {}

    def summarize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def merge_1(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def summarize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def compute_3(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def schedule_4(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def summarize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row
