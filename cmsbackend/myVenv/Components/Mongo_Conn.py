import pymongo

def connection():
    conn = pymongo.MongoClient("mongodb://localhost:27017")
    return conn