"""Synthetic test code for indexing (auth, file 14)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class QuotaRow14:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def save_quota_14_0(rows, limit=5):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_quota_14_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_quota_14_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def summarize_quota_14_3(rows, limit=8):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def filter_quota_14_4(rows, limit=9):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_quota_14_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class QuotaAuthHandler14:
    def __init__(self):
        self.cache = {}

    def retry_0(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def split_1(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def merge_2(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def filter_3(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def retry_4(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
