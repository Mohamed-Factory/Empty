"""Synthetic test code for indexing (analytics, file 23)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ParcelRow23:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def compute_parcel_23_0(rows, limit=5):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_parcel_23_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def format_parcel_23_2(rows, limit=7):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def validate_parcel_23_3(rows, limit=8):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def schedule_parcel_23_4(rows, limit=9):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_parcel_23_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ParcelAnalyticsHandler23:
    def __init__(self):
        self.cache = {}

    def format_0(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def merge_1(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def schedule_2(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def rank_4(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def filter_5(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row
