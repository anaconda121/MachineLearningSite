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

@app.route("/blackjack")
def blackjack():
    return render_template('web_games/blackjack.html')

@app.route("/navbar")
def navbar():
    return render_template('navbar.html')

@app.route("/tictactoe")
def tictactoe():
	return render_template('web_games/tictactoe.html')

@app.route("/asteriods")
def asteriods():
	return render_template('web_games/asteriods.html')

@app.route("/snake")
def snake():
	return render_template('web_games/snake.html')

if __name__ == "__main__":
    app.run(debug=True)