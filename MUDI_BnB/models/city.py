#!/usr/bin/python3
"""City Module for MBNB Project"""


from models.base_model import BaseModel


class City(BaseModel):
    """The city class, contains state ID and name"""
    state_id = ""
    name = ""
