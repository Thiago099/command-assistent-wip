from flask import Flask, send_from_directory,jsonify
app = Flask(__name__)

from textblob import TextBlob
blob = TextBlob("hello my name is jay, I am a student at the university of texas at austin.")
# python -m textblob.download_corpora
@app.route('/api')
def api_hello():
    return jsonify({"message": blob.noun_phrases})

@app.route('/')
def index():
    return send_from_directory('dist', "index.html")

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('dist', filename)


if __name__ == '__main__':  # pragma: no cover
    app.run(port=3000,debug=True)