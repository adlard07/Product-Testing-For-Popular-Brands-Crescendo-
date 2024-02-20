from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/fill_form', methods=['POST'])
def fill_form():
    if request.method == 'POST':
        data = request.get_json()
        gstnumber = data.get('gstNumber')
        return jsonify(gstnumber), 200
    else:
        return jsonify({"error": "Only POST requests are supported"}), 405
    
    
if __name__=='__main__':
    app.run(debug=True, port=8080) 