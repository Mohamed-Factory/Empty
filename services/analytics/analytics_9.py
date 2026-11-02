"""Synthetic test code for indexing (analytics, file 9)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ItemRow9:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def validate_item_9_0(rows, limit=5):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def summarize_item_9_1(rows, limit=6):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def filter_item_9_2(rows, limit=7):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_item_9_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def summarize_item_9_4(rows, limit=9):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def save_item_9_5(rows, limit=10):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ItemAnalyticsHandler9:
    def __init__(self):
        self.cache = {}

    def validate_0(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def retry_1(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def compute_2(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def save_3(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def schedule_5(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row
