"""Synthetic test code for indexing (catalog, file 24)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class QuotaRow24:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def save_quota_24_0(rows, limit=5):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def schedule_quota_24_1(rows, limit=6):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def schedule_quota_24_2(rows, limit=7):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_quota_24_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def split_quota_24_4(rows, limit=9):
    """Split up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def rank_quota_24_5(rows, limit=10):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class QuotaCatalogHandler24:
    def __init__(self):
        self.cache = {}

    def format_0(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def export_1(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def summarize_5(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row
