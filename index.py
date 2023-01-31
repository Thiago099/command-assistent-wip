from flask import Flask, send_from_directory,jsonify
app = Flask(__name__)


@app.route('/api')
def api_hello():
    return jsonify({"message": "Hello from flask"})

@app.route('/')
def index():
    return send_from_directory('dist', "index.html")

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('dist', filename)


if __name__ == '__main__':  # pragma: no cover
    app.run(port=3000,debug=True)