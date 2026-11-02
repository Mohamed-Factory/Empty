"""Synthetic test code for indexing (analytics, file 16)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ReportRow16:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def merge_report_16_0(rows, limit=5):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def save_report_16_1(rows, limit=6):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_report_16_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def validate_report_16_3(rows, limit=8):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def load_report_16_4(rows, limit=9):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def normalize_report_16_5(rows, limit=10):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ReportAnalyticsHandler16:
    def __init__(self):
        self.cache = {}

    def compute_0(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def format_1(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def split_2(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
