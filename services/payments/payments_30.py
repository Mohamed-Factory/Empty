"""Synthetic test code for indexing (payments, file 30)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AccountRow30:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def format_account_30_0(rows, limit=5):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def rank_account_30_1(rows, limit=6):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def format_account_30_2(rows, limit=7):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_account_30_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_account_30_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_account_30_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AccountPaymentsHandler30:
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

    def schedule_2(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def compute_3(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def save_4(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def save_5(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row
