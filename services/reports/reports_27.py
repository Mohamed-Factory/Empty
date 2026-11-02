"""Synthetic test code for indexing (reports, file 27)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AddressRow27:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def normalize_address_27_0(rows, limit=5):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_address_27_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def validate_address_27_2(rows, limit=7):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def rank_address_27_3(rows, limit=8):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_address_27_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def load_address_27_5(rows, limit=10):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AddressReportsHandler27:
    def __init__(self):
        self.cache = {}

    def rank_0(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def merge_1(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def compute_3(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def split_4(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def format_5(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row
