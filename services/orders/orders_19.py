"""Synthetic test code for indexing (orders, file 19)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ReportRow19:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def summarize_report_19_0(rows, limit=5):
    """Summarize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def format_report_19_1(rows, limit=6):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def merge_report_19_2(rows, limit=7):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def save_report_19_3(rows, limit=8):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def save_report_19_4(rows, limit=9):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def merge_report_19_5(rows, limit=10):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ReportOrdersHandler19:
    def __init__(self):
        self.cache = {}

    def rank_0(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def format_1(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def format_2(self, row):
        self.cache[row.id] = row
        row.tags.append('format')
        return row

    def normalize_3(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def filter_4(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def schedule_5(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row
