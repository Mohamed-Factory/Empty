"""Synthetic test code for indexing (orders, file 39)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class EventRow39:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_event_39_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_event_39_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_event_39_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def merge_event_39_3(rows, limit=8):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_event_39_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_event_39_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class EventOrdersHandler39:
    def __init__(self):
        self.cache = {}

    def save_0(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def merge_1(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def compute_2(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def save_4(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def format_5(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row
