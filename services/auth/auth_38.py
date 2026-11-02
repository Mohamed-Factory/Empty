"""Synthetic test code for indexing (auth, file 38)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class QuotaRow38:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def split_quota_38_0(rows, limit=5):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def validate_quota_38_1(rows, limit=6):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def summarize_quota_38_2(rows, limit=7):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def filter_quota_38_3(rows, limit=8):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_quota_38_4(rows, limit=9):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def schedule_quota_38_5(rows, limit=10):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class QuotaAuthHandler38:
    def __init__(self):
        self.cache = {}

    def split_0(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def merge_1(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def retry_3(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def rank_4(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def retry_5(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row
