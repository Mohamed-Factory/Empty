"""Synthetic test code for indexing (catalog, file 35)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class EventRow35:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def rank_event_35_0(rows, limit=5):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def format_event_35_1(rows, limit=6):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_event_35_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def rank_event_35_3(rows, limit=8):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def split_event_35_4(rows, limit=9):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_event_35_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class EventCatalogHandler35:
    def __init__(self):
        self.cache = {}

    def schedule_0(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def export_1(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def save_2(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def validate_4(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def save_5(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row
