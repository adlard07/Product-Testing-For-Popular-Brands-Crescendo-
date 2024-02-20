from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['POST'])
def fill_form():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405