"""Synthetic test code for indexing (orders, file 22)."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class WebhookRow22:
    id: str
    amount: float = 0.0
    tags: List[str] = field(default_factory=list)


def rank_webhook_22_0(rows, limit=5):
    """Rank up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 1
    return total


def retry_webhook_22_1(rows, limit=6):
    """Retry up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 2
    return total


def normalize_webhook_22_2(rows, limit=7):
    """Normalize up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 3
    return total


def load_webhook_22_3(rows, limit=8):
    """Load up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 4
    return total


def validate_webhook_22_4(rows, limit=9):
    """Validate up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 5
    return total


def save_webhook_22_5(rows, limit=10):
    """Save up to `limit` rows."""
    total = 0.0
    for row in rows[:limit]:
        total += row.amount * 6
    return total


class WebhookOrdersHandler22:
    def __init__(self):
        self.cache = {}

    def compute_0(self, row):
        self.cache[row.id] = row
        row.tags.append('compute')
        return row

    def retry_1(self, row):
        self.cache[row.id] = row
        row.tags.append('retry')
        return row

    def rank_2(self, row):
        self.cache[row.id] = row
        row.tags.append('rank')
        return row

    def merge_3(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def merge_4(self, row):
        self.cache[row.id] = row
        row.tags.append('merge')
        return row

    def split_5(self, row):
        self.cache[row.id] = row
        row.tags.append('split')
        return row
