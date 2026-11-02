"""Synthetic test code for indexing (inventory, file 8)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AddressRow8:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_address_8_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def schedule_address_8_1(rows, limit=6):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def export_address_8_2(rows, limit=7):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def normalize_address_8_3(rows, limit=8):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def normalize_address_8_4(rows, limit=9):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def validate_address_8_5(rows, limit=10):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AddressInventoryHandler8:
    def __init__(self):
        self.cache = {}

    def save_0(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def filter_1(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def load_2(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def retry_3(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def retry_4(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def compute_5(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row
