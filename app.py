from flask import Flask, request, jsonify, render_template
app = Flask(__name__)

#file routes
@app.route("/")
def main():
    return render_template('homepage.html')

@app.route("/sign")
def sign():
    return render_template('ml_pages/sign_language.html')

@app.route("/horse")
def horse():
    return render_template('ml_pages/horses_vs_humans.html')

if __name__ == "__main__":
    app.run(debug=True)
