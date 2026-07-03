from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
@app.route("/api/hello")
def hello():
    language = request.args.get("lang", "en")
    response = requests.get(f"https://v2.jokeapi.dev/joke/Any?lang={language}&safe-mode",timeout= 5)
    data = response.json()

    if data['type'] == "twopart":
        return jsonify({
            "setup": data["setup"],
            "delivery": data["delivery"],
            "type": "twopart"
        })
    elif data['type'] == "sinlge":
        return jsonify({
            "joke": data['joke'],
            "type": "single"
        })
    else:
        return jsonify({
            "type": "error"
        })
    

if __name__ == "__main__":
    app.run(port=8080, debug=True)
