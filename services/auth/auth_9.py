"""Synthetic test code for indexing (auth, file 9)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AccountRow9:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def validate_account_9_0(rows, limit=5):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def summarize_account_9_1(rows, limit=6):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def schedule_account_9_2(rows, limit=7):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def export_account_9_3(rows, limit=8):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def normalize_account_9_4(rows, limit=9):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def load_account_9_5(rows, limit=10):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AccountAuthHandler9:
    def __init__(self):
        self.cache = {}

    def merge_0(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def split_1(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def validate_2(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def validate_3(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def save_5(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row
