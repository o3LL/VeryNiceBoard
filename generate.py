#!/usr/bin/python
import os, json

PATH = '../app/sounds/'

def askName(item):
    return input("Choose a name for " + item + " :")

def parse(dir):
    arr = []
    for item in dir:
        arr.append({ "file": item , "name": askName(item) })
    return arr

dir = os.listdir(PATH)
obj = parse(dir)
with open('../app/config.json', 'w') as f:
    json.dump(obj, f)
f.closed
