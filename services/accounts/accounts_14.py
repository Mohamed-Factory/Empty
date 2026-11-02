"""Synthetic test code for indexing (accounts, file 14)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ReportRow14:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def export_report_14_0(rows, limit=5):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def load_report_14_1(rows, limit=6):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def compute_report_14_2(rows, limit=7):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def save_report_14_3(rows, limit=8):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def normalize_report_14_4(rows, limit=9):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def compute_report_14_5(rows, limit=10):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ReportAccountsHandler14:
    def __init__(self):
        self.cache = {}

    def save_0(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def load_1(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def filter_2(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def rank_3(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def export_4(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def split_5(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row
