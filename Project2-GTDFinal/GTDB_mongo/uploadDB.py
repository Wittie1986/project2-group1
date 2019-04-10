# Import dependencies

import csv
import json
import pandas as pd
import sys, getopt, pprint
from pymongo import MongoClient

# Establish connections and client

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Declare database

mongo_client = MongoClient()
db = client.gtd_db

# Declare csv to import

csvfile = open('../resources/globalterrorismdb_0718dist.csv', 'r')
reader = csv.DictReader( csvfile )

db.segment.drop()

# importk csv to db

for each in reader:
    row={}
    for field in header:
        row[field]=each[field]

    db.segment.insert(row)


