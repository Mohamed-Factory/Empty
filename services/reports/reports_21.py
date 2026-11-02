"""Synthetic test code for indexing (reports, file 21)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ParcelRow21:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def retry_parcel_21_0(rows, limit=5):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def export_parcel_21_1(rows, limit=6):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def rank_parcel_21_2(rows, limit=7):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def filter_parcel_21_3(rows, limit=8):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def split_parcel_21_4(rows, limit=9):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def retry_parcel_21_5(rows, limit=10):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ParcelReportsHandler21:
    def __init__(self):
        self.cache = {}

    def validate_0(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def load_1(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def normalize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def save_3(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def load_4(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def load_5(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row
