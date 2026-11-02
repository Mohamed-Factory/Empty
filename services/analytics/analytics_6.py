"""Synthetic test code for indexing (analytics, file 6)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class SessionRow6:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def export_session_6_0(rows, limit=5):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def merge_session_6_1(rows, limit=6):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_session_6_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def rank_session_6_3(rows, limit=8):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_session_6_4(rows, limit=9):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def compute_session_6_5(rows, limit=10):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class SessionAnalyticsHandler6:
    def __init__(self):
        self.cache = {}

    def format_0(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def split_2(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def format_3(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def compute_4(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def compute_5(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row
