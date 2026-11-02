"""Synthetic test code for indexing (catalog, file 26)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AccountRow26:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def normalize_account_26_0(rows, limit=5):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_account_26_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def schedule_account_26_2(rows, limit=7):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_account_26_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def split_account_26_4(rows, limit=9):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def merge_account_26_5(rows, limit=10):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AccountCatalogHandler26:
    def __init__(self):
        self.cache = {}

    def validate_0(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def validate_4(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def normalize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row
