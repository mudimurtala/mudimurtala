#!/usr/bin/python3
"""This module defines a class to manage file storage for mbnb project"""

import json

class FileStorage:
    """This class manages storage of my mbnb objects(models) in JSON format"""
    __file_path = 'file.json'
    __objects = {}

    def all(self):
        """Returns a dictionary of all the models(objects) that are currently stored"""
        return FileStorage.__objects
    
    def new(self, obj):
        """Add a new object to the storage dictionary"""
        self.all().update({obj.to_dict()['__class__'] + '.' + obj.id: obj})

    def save(self):
        """This method saves storage dictionary to file i.e. Serialization"""
        with open(FileStorage.__file_path, 'w') as f:
            temp = {}
            temp.update(FileStorage.__objects)
            for key, val in temp.items():
                temp[key] = val.to_dict()
            json.dump(temp, f)
            