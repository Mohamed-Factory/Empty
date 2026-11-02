"""Synthetic test code for indexing (accounts, file 20)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class EventRow20:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def rank_event_20_0(rows, limit=5):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def normalize_event_20_1(rows, limit=6):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def schedule_event_20_2(rows, limit=7):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def rank_event_20_3(rows, limit=8):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def split_event_20_4(rows, limit=9):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def save_event_20_5(rows, limit=10):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class EventAccountsHandler20:
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

    def validate_2(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def summarize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def split_4(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def summarize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row
