"""Synthetic test code for indexing (notifications, file 39)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AddressRow39:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_address_39_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def load_address_39_1(rows, limit=6):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_address_39_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def validate_address_39_3(rows, limit=8):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def validate_address_39_4(rows, limit=9):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def schedule_address_39_5(rows, limit=10):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AddressNotificationsHandler39:
    def __init__(self):
        self.cache = {}

    def schedule_0(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def normalize_2(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def load_4(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
