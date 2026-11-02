"""Synthetic test code for indexing (search, file 33)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ParcelRow33:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_parcel_33_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def schedule_parcel_33_1(rows, limit=6):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def format_parcel_33_2(rows, limit=7):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def normalize_parcel_33_3(rows, limit=8):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_parcel_33_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def filter_parcel_33_5(rows, limit=10):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ParcelSearchHandler33:
    def __init__(self):
        self.cache = {}

    def load_0(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def load_1(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def retry_2(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def retry_4(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def compute_5(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row
