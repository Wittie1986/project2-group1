from flask import Flask
from flask_pymongo import PyMongo
from flask import jsonify

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Terroist"
mongo = PyMongo(app)
# you will have to specify what data goes where via app.route 
#below is an example, I beleive you will have to create one per view. I am not sure how to do the dashboard where there is several charts on one view.
@app.route("/")
def home_page():
    online_users = mongo.db.users.find({"online": True})
    return render_template("index.html",
        online_users=online_users)

if __name__ == '__main__':
    app.run(debug=True)

# Below is the RESTful API code for PyMongo which I do not beleive we will need. I have kept it in case you guys would rather use this but I beleive the above code is all we need.
# from flask import Flask
# from flask import jsonify
# from flask import request
# from flask_pymongo import PyMongo
# #the following is the framework for the Flask API. Once Aziz and Scott input the specific data they need for each view it should 
# # load. You will need to input the specific collections and if needed columns and spcification of what data for each view. 
# app = Flask(__name__)

# app.config['MONGO_DBNAME'] = 'terrorist'
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/terrorist'

# mongo = PyMongo(app)
# # this example is how to get all information from a collection. Just replace the example variables with what you need and it should run.
# @app.route('/', methods=['GET'])
# def dashboard():
#   dashboard = mongo.db.#insert collection needed
#   output = []
#   for s in #collection name here#.find():
#     output.append# whatever data you need for this view here by collumn. Following is example({'name' : s['name'], 'distance' : s['distance']})
#   return jsonify({'result' : output})
# # this example is how to get one peice of information from a collection
# @app.route('/star/', methods=['GET'])
# def get_one_star(name):
#   star = mongo.db.stars
#   s = star.find_one({'name' : name})
#   if s:
#     output = {'name' : s['name'], 'distance' : s['distance']}
#   else:
#     output = "No such name"
#   return jsonify({'result' : output})


# if __name__ == '__main__':
#     app.run(debug=True)