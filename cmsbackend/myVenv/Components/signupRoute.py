from flask import Flask , jsonify , request
from Mongo_Conn import connection
from colorama import Fore

app = Flask(__name__)

@app.route("/signup", methods=["POST"])
def sign_up():
    try:
        conn_ob = connection()

        db = conn_ob["School"]
        collection = db["students"]

        # json received from the request body...
        received_data = request.get_json()
        email = received_data.get("Email")
        first_name = received_data.get("FirstName")
        last_name = received_data.get("LastName")
        contact = received_data.get("Contact")
        permanentAddress = received_data.get("PermanentAddress")
        password = received_data.get("Password")

        search_email = collection.find_one({
        "Email": email
        })
        
        #Converting the _id to a String and Updating it....
        id_ob = str(search_email["_id"])
        search_email["_id"] = id_ob
        
        #Remove Password for security Reasons...
        del search_email["Password"]

        if search_email:
            return jsonify({"Message": "Student Already Registered. Try Another Email.", "Message:Found This Recored..": search_email})
        else:
            add_this = collection.insert_one({
                "Email": email,
                "FirstName": first_name,
                "LastName": last_name,
                "Contact": contact,
                "PermanentAddress": permanentAddress,
                "Password": password
            })

            return jsonify({"Message": "Student Registered Successfully"})
    except Exception as e:
        return jsonify({"Message": "Error: " + str(e)})

app.run()
