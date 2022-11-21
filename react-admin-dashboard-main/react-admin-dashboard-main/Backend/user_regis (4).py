from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
import json
import re
from flask_cors import CORS, cross_origin
 
app = Flask(__name__)
 
 
app.secret_key = '123'
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'videonft'
 
mysql = MySQL(app)
CORS(app)

@app.route('/')
@app.route('/login', methods =['GET', 'POST'])
def login():
    record = json.loads(request.data)
    msg = ''
    if request.method == 'POST' and 'username' in record and 'password' in record:        
        username = record['username']
        password = record['password']
        msg = record
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE username = % s AND password = % s', (username, password, ))
        account = cursor.fetchone()
        if account:
            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['username']
            msg = 'Logged in successfully !'
            return jsonify({'msg': msg})
        else:
            msg = 'Incorrect username / password !'
    # return jsonify({'data': msg})
    return jsonify({'msg': msg})
 
@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    return redirect(url_for('login'))
 
@app.route('/register', methods =['GET', 'POST'])
def register():
    record = json.loads(request.data)
    msg = ''
    # if request.method == 'POST' and 'fullname' in request.form and 'gender' in request.form and 'mobile_number' in request.form and 'email' in request.form and 'date_of_birth' in request.form and 'username' in request.form and 'password' in request.form and 'city' in request.form :
    if request.method == 'POST' and 'username' in record and 'password' in record and 'email' in record :
        # fullname = request.form['fullname']
        # gender = request.form['gender']
        # mobile_number = request.form['mobile_number']
        username = record['username']
        # date_of_birth = record['date_of_birth']
        password = record['password']
        email = record['email']
        # city = record['city']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE username = % s', (username, ))
        account = cursor.fetchone()
        if account:
            msg = 'Account already exists !'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address !'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers !'
        elif not username or not password or not email:
            msg = 'Please fill out the form !'
        else:
            # cursor.execute('INSERT INTO accounts VALUES (NULL, % s, % s, % s, %s, % s, % s, % s, % s)', (fullname, gender, mobile_number, email, date_of_birth, username, password, city, ))
            cursor.execute('INSERT INTO accounts VALUES (NULL, % s, % s, % s)', (username, password, email ))
            mysql.connection.commit()
            msg = 'You have successfully registered !'
    elif request.method == 'POST':
        msg = 'Please fill out the form !'
    print("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
    print("data message", msg)
    # return render_template('register.html', msg = msg)
    return jsonify({'msg': msg})


if __name__ == "__main__":
    app.run(debug = True)