# from data_generation.generation import  generate_data
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/submit_brand', methods=['POST'])
def post_brand():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    

@app.route('/submit_factory', methods=['POST'])
def submit_quality():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405
   
    
@app.route('/submit_product', methods=['POST'])
def submit_product():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405


@app.route('/submit_ingredients', methods=['POST'])
def submit_ingredients():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405


@app.route('/submit_supplier', methods=['POST'])
def submit_supplier():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405
    
    
@app.route('/submit_warehouse', methods=['POST'])
def submit_warehouse():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405


@app.route('/submit_warehouse_inventry', methods=['POST'])
def submit_warehouse_inventry():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405
    

@app.route('/submit_production', methods=['POST'])
def submit_production():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405
    

@app.route('/submit_retailers', methods=['POST'])
def submit_retailers():
    if request.method == 'POST':
        data = request.json
        return jsonify(data), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405    

    
if __name__=='__main__':
    app.run(debug=True) 