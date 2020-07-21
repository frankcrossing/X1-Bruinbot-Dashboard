import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random
import time

# Use a service account
cred = credentials.Certificate('C:/Users/xing_/PycharmProjects/fair-myth-274206-firebase-adminsdk-pqzrm-6cc9be4ab5.json')
firebase_admin.initialize_app(cred)

db = firestore.client()
listValue = []

series = 0
while series < 4:
    count = random.randint(1,10)
    doc_ref = db.collection(u'Sensors').document("Long")
    data = {
        'timestamp': time.asctime(),
        'value': count
    }

    listValue.append(data)
    doc_ref.set({
         u'value': count,
         u'values': listValue
    })

    doc_ref = db.collection(u'Sensors').document("Lat")
    doc_ref.set({
         u'value': count,
         u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("SIV")
    doc_ref.set({
         u'value': count,
         u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("X")
    doc_ref.set({
        u'value': count,
        u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("Y")
    doc_ref.set({
        u'value': count,
        u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("Z")
    doc_ref.set({
        u'value': count,
        u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("Sensor1")
    doc_ref.set({
        u'value': count,
        u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("Sensor2")
    doc_ref.set({
        u'value': count,
        u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("Sensor3")
    doc_ref.set({
        u'value': count,
        u'values': listValue
    })
    doc_ref = db.collection(u'Sensors').document("Sensor4")
    doc_ref.set({
        u'value': count,
        u'values': listValue
    })
    series = series + 1
