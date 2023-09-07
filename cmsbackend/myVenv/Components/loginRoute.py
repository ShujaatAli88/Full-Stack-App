from Mongo_Conn import connection
from flask import Flask, jsonify, request
from flask_cors import CORS   


app = Flask(__name__)
CORS(app)

cors = CORS(app, resources={r"/api*": {"origins": "http://localhost:3000/"}})
@app.route("/login" ,methods=["POST"])
def login():
    try:
        received_data = request.get_json()
        # print("receeived",received_data)  Checked What Data I was Receriving ...
    
        email = received_data.get("Email")
        password = received_data.get("Password")
        
        conn_ob = connection()
        
        db = conn_ob["School"]
        collection = db["students"]
        
        find_pass_email = collection.find_one({
            "Email": email,
            "Password": password
        })
        
        if find_pass_email:
            # print("Name:",password)
            # print("Email:",email)
            
            name = find_pass_email["FirstName"]
            return jsonify({"Message": "Welcome " + str(name)})
        else:
            raise ValueError({"Message":"Invalid Password or Email"})
    except Exception as e:
        return jsonify({"Error": str(e)})


app.run()
