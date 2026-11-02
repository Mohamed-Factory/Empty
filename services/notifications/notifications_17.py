"""Synthetic test code for indexing (notifications, file 17)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class AccountRow17:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def save_account_17_0(rows, limit=5):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def merge_account_17_1(rows, limit=6):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_account_17_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def compute_account_17_3(rows, limit=8):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def export_account_17_4(rows, limit=9):
    """Export up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def format_account_17_5(rows, limit=10):
    """Format up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class AccountNotificationsHandler17:
    def __init__(self):
        self.cache = {}

    def validate_0(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def export_1(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def validate_2(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def schedule_3(self, row):
        self.cache[row.id] = row
        row.tags.append('schedule')
        return row

    def summarize_4(self, row):
        self.cache[row.id] = row
        row.tags.append('summarize')
        return row

    def export_5(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row
