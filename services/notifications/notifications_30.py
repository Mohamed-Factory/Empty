"""Synthetic test code for indexing (notifications, file 30)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ItemRow30:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def load_item_30_0(rows, limit=5):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def summarize_item_30_1(rows, limit=6):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_item_30_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def summarize_item_30_3(rows, limit=8):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def split_item_30_4(rows, limit=9):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def split_item_30_5(rows, limit=10):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ItemNotificationsHandler30:
    def __init__(self):
        self.cache = {}

    def save_0(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def normalize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def schedule_3(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
