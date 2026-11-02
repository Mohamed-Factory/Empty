"""Synthetic test code for indexing (shipping, file 17)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class EventRow17:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def export_event_17_0(rows, limit=5):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def load_event_17_1(rows, limit=6):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def export_event_17_2(rows, limit=7):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def compute_event_17_3(rows, limit=8):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def export_event_17_4(rows, limit=9):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def normalize_event_17_5(rows, limit=10):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class EventShippingHandler17:
    def __init__(self):
        self.cache = {}

    def merge_0(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def summarize_1(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def retry_2(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def filter_3(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def normalize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row
