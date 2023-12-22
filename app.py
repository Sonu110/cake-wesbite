from flask import Flask, request, jsonify
import mysql.connector as connect
from flask_cors import CORS
import base64

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

mydb = connect.connect(
    host="localhost", port=3306, user="root",
    password="sonu#123", database="reacttest"
)

cursor = mydb.cursor()

@app.route('/')
def index():
    return "yes"

@app.route('/restation', methods=['POST', 'GET'])
def restation():
    if request.method == 'POST':
        try:
            data = request.get_json()  # Get JSON data
            name = data.get("name")
            email = data.get("email")
            password = data.get("password")
            
            cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
            mydb.commit()

            message = f"Success: Data inserted for Name: {name}, email {email} Password: {password}"
            response = {'status': 'success', 'message': message}
        except Exception as e:
            message = f"Error: {str(e)}"
            response = {'status': 'error', 'message': message}

        return jsonify(response)
    message = "Error: Method not allowed"
    response = {'status': False, 'message': message}
    return jsonify(response)

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()  # Get JSON data
        name = data.get("name")
        email = data.get("email")
        password = data.get("passwords")
       
        database_query = "SELECT * FROM users WHERE name = %s"
        cursor.execute(database_query, (email,))
        user = cursor.fetchone()

        if user:
            stored_password = user[3]

            if password == stored_password.strip():
                return jsonify({'status': True, 'message': 'Login successful'})
            else:
                return jsonify({'status': False, 'message': 'Incorrect password'})
        else:
            return jsonify({'status': False, 'message': 'User not found'})
    except Exception as e:
        message = f"Error: {str(e)}"
        response = {'status': False, 'message': message}
        return jsonify(response)


@app.route('/users' ,  methods=['POST', 'GET'])
def users():
    database_query = "SELECT * FROM users "
    cursor.execute(database_query)
    users = cursor.fetchall()

    print(users)
    return jsonify(users)




@app.route('/menu', methods=['POST'])
def menu():
    if request.method == 'POST':
        try:
            if request.is_json:
                # JSON data
                data = request.get_json()
                name = data.get("ProductName")
                description = data.get("Decription")
                price = data.get("price")
                originalPrice = data.get('originalPrice')
                discount = data.get('discount')
                category = data.get('cetagory')
                # Note: You may need to adjust this part based on how you handle file uploads with JSON data
                file = None
            else:
                # Form data (multipart/form-data)
                data = request.form
                name = data.get("ProductName")
                description = data.get("Decription")
                price = data.get("price")
                originalPrice = data.get('originalPrice')
                discount = data.get('discount')
                category = data.get('cetagory')
                file = request.files['file']
                image_data = base64.b64encode(file.read()).decode('utf-8')

            # Use placeholders in the SQL query
            query = "INSERT INTO menu (name, category, description, image, price, originalPrice, discount) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(query, (name, category, description, image_data, price, originalPrice, discount))
            mydb.commit()

            message = f"Success: Data inserted for Name: {name}, category {category}, price: {price}"
            response = {'status': 'success', 'message': message}
        except Exception as e:
            message = f"Error: {str(e)}"
            response = {'status': 'error', 'message': message}

        return jsonify(response)

    message = "Error: Method not allowed"
    response = {'status': False, 'message': message}
    return jsonify(response)



# Invalid request method
@app.route('/login', methods=['GET'])
def invalid_login():
    message = "Error: Method not allowed"
    response = {'status': False, 'message': message}
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True, port=1000)
