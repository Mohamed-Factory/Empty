"""Synthetic test code for indexing (orders, file 30)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AddressRow30:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def summarize_address_30_0(rows, limit=5):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def split_address_30_1(rows, limit=6):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_address_30_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def split_address_30_3(rows, limit=8):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def export_address_30_4(rows, limit=9):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def filter_address_30_5(rows, limit=10):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AddressOrdersHandler30:
    def __init__(self):
        self.cache = {}

    def save_0(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def merge_2(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def save_4(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def normalize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row
