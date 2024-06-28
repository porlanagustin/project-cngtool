"""create suppliers table

Revision ID: e9921db3fb12
Revises: 
Create Date: 2024-05-27 22:25:24.000377

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e9921db3fb12'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.create_table('suppliers', sa.Column('id', sa.Integer(), nullable=False, primary_key=True), sa.Column('title', sa.String(), nullable=False))


def downgrade():
    op.drop_table('suppliers')
