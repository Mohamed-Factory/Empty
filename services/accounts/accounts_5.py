"""Synthetic test code for indexing (accounts, file 5)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class WebhookRow5:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def validate_webhook_5_0(rows, limit=5):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def merge_webhook_5_1(rows, limit=6):
    """Merge up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def retry_webhook_5_2(rows, limit=7):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def save_webhook_5_3(rows, limit=8):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def compute_webhook_5_4(rows, limit=9):
    """Compute up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def validate_webhook_5_5(rows, limit=10):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class WebhookAccountsHandler5:
    def __init__(self):
        self.cache = {}

    def normalize_0(self, row):
        self.cache[row.id] = row
        row.tags.append('normalize')
        return row

    def save_1(self, row):
        self.cache[row.id] = row
        row.tags.append('save')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def filter_3(self, row):
        self.cache[row.id] = row
        row.tags.append('filter')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def retry_5(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row
