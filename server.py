from flask import Flask, request,json

app = Flask(__name__)


@app.route("/calculator/greeting", methods=['GET'])
def greeting():
    return 'Hello World'

@app.route("/calculator/add", methods=['POST'])
def add():
    res = json.loads(request.data)
    x = {"result" : res['first'] + res['second']}

    return x

@app.route("/calculator/subtract", methods=['POST'])
def subtract():
    res = json.loads(request.data)
    x = {"result" : res['first']  - res['second']}
    return x

if __name__ == '__main__':
    app.run(port=8080,host='0.0.0.0')
