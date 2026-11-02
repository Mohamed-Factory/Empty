"""Synthetic test code for indexing (payments, file 2)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ParcelRow2:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def format_parcel_2_0(rows, limit=5):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_parcel_2_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def filter_parcel_2_2(rows, limit=7):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_parcel_2_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def schedule_parcel_2_4(rows, limit=9):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def split_parcel_2_5(rows, limit=10):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ParcelPaymentsHandler2:
    def __init__(self):
        self.cache = {}

    def split_0(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def split_1(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def compute_3(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def schedule_4(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
