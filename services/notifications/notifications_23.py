"""Synthetic test code for indexing (notifications, file 23)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class LedgerRow23:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def filter_ledger_23_0(rows, limit=5):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def split_ledger_23_1(rows, limit=6):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_ledger_23_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def split_ledger_23_3(rows, limit=8):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def format_ledger_23_4(rows, limit=9):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def validate_ledger_23_5(rows, limit=10):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class LedgerNotificationsHandler23:
    def __init__(self):
        self.cache = {}

    def compute_0(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def retry_1(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def export_2(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def save_4(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def load_5(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row
