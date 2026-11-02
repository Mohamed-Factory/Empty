"""Synthetic test code for indexing (accounts, file 36)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class EventRow36:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_event_36_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def compute_event_36_1(rows, limit=6):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def merge_event_36_2(rows, limit=7):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def merge_event_36_3(rows, limit=8):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def filter_event_36_4(rows, limit=9):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_event_36_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class EventAccountsHandler36:
    def __init__(self):
        self.cache = {}

    def load_0(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def retry_1(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def validate_3(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def filter_5(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row
