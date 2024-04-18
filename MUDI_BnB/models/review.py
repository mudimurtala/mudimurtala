#!/usr/bin/python3
"""Review Module for MBNB Project"""


from models.base_model import BaseModel

class Review(BaseModel):
    """Review class to store imformation"""
    place_id = ""
    user_id = ""
    text = ""
