"""Synthetic test code for indexing (reports, file 0)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class MessageRow0:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def filter_message_0_0(rows, limit=5):
    """Filter up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def rank_message_0_1(rows, limit=6):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def save_message_0_2(rows, limit=7):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def schedule_message_0_3(rows, limit=8):
    """Schedule up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def save_message_0_4(rows, limit=9):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def save_message_0_5(rows, limit=10):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class MessageReportsHandler0:
    def __init__(self):
        self.cache = {}

    def export_0(self, row):
        self.cache[row.id] = row
        row.tags.append('export')
        return row

    def filter_1(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def validate_2(self, row):
        self.cache[row.id] = row
        row.tags.append('validate')
        return row

    def split_3(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row

    def rank_4(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def retry_5(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row
