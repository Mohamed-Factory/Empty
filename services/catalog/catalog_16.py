"""Synthetic test code for indexing (catalog, file 16)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ReportRow16:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def filter_report_16_0(rows, limit=5):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def format_report_16_1(rows, limit=6):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def schedule_report_16_2(rows, limit=7):
    """Schedule up to `limit` rows."""
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


def format_report_16_4(rows, limit=9):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def load_report_16_5(rows, limit=10):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class ReportCatalogHandler16:
    def __init__(self):
        self.cache = {}

    def filter_0(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def load_1(self, row):
        self.cache[row.id] = row
        row.tags.append('load')
        return row

    def retry_2(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def schedule_3(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def compute_4(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def schedule_5(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row
