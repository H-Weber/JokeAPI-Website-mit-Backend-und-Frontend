from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/api/hello")
def hello():
    response = requests.get("https://v2.jokeapi.dev/joke/Any?safe-mode",timeout= 5)
    data = response.json()

    if data['type'] == "twopart":
        return jsonify({
            "setup": data["setup"],
            "delivery": data["delivery"],
            "twopart": True
        })

    return jsonify(data)

if __name__ == "__main__":
    app.run(port=8080, debug=True)
