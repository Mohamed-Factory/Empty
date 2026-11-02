"""Synthetic test code for indexing (notifications, file 38)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class QueryRow38:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_query_38_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def export_query_38_1(rows, limit=6):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def rank_query_38_2(rows, limit=7):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def export_query_38_3(rows, limit=8):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def retry_query_38_4(rows, limit=9):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def summarize_query_38_5(rows, limit=10):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class QueryNotificationsHandler38:
    def __init__(self):
        self.cache = {}

    def compute_0(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def save_1(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def retry_3(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def normalize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def validate_5(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row
