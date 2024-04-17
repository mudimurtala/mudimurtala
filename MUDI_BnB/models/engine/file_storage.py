#!/usr/bin/python3
"""This module defines a class to manage file storage for mbnb project"""

import json

class FileStorage:
    """This class manages storage of my mbnb objects(models) in JSON format"""
    __file_path = 'file.json'
    __objects = {}