"""Synthetic test code for indexing (orders, file 14)."""

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


def retry_report_14_1(rows, limit=6):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def rank_report_14_2(rows, limit=7):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def normalize_report_14_3(rows, limit=8):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def schedule_report_14_4(rows, limit=9):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def normalize_report_14_5(rows, limit=10):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ReportOrdersHandler14:
    def __init__(self):
        self.cache = {}

    def rank_0(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def validate_1(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def retry_2(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def validate_3(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def save_4(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def schedule_5(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row
