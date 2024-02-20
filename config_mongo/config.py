from pymongo import MongoClient

class Connect:
    def __init__(self):    
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client['ProductTesting']

        self.collections = [
            'brand', 
            'ingredients', 
            'products', 
            'production', 
            'quality_check', 
            'retailers', 
            'supplier', 
            'warehouse', 
            'warehouse_inventry'
            ]

