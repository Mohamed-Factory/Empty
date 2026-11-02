"""Synthetic test code for indexing (accounts, file 29)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class EventRow29:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def export_event_29_0(rows, limit=5):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def split_event_29_1(rows, limit=6):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def split_event_29_2(rows, limit=7):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def export_event_29_3(rows, limit=8):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def save_event_29_4(rows, limit=9):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def export_event_29_5(rows, limit=10):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class EventAccountsHandler29:
    def __init__(self):
        self.cache = {}

    def retry_0(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def compute_1(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def schedule_2(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def export_4(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def filter_5(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row
