"""Synthetic test code for indexing (payments, file 13)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ParcelRow13:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def format_parcel_13_0(rows, limit=5):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def rank_parcel_13_1(rows, limit=6):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def rank_parcel_13_2(rows, limit=7):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def summarize_parcel_13_3(rows, limit=8):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def normalize_parcel_13_4(rows, limit=9):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_parcel_13_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ParcelPaymentsHandler13:
    def __init__(self):
        self.cache = {}

    def validate_0(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def format_1(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def split_5(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row
