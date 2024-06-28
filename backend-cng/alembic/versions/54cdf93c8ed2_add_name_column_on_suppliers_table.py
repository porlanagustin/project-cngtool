"""add name column on suppliers table

Revision ID: 54cdf93c8ed2
Revises: e9921db3fb12
Create Date: 2024-05-27 22:29:34.324098

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '54cdf93c8ed2'
down_revision: Union[str, None] = 'e9921db3fb12'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.add_column('suppliers', sa.Column('name', sa.String(), nullable=False))

def downgrade():
    op.drop_column('suppliers', 'name')
