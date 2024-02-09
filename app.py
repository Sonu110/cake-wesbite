from flask import Flask, request, jsonify
import mysql.connector as connect
from flask_cors import CORS
import base64
import os
from werkzeug.utils import secure_filename

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

    
    return jsonify(users) 



@app.route('/restorentdata', methods=['GET'])
def get_restorent():
    try:
        database_query = "SELECT * FROM restaurants"
            
        cursor.execute(database_query)
        
        restorentdata = cursor.fetchall()
        response = {'status': 'success', 'message': 'Data retrieved successfully.'}
        return jsonify(restorentdata)
    
    except Exception as e:
        message = f"Error: {str(e)}"
        response = {'status': 'error', 'message': message}

    return jsonify(response)


 



@app.route('/menu', methods=['POST','GET'])
def menu():
    if request.method == 'POST':
        image_data = None
        try:
            if request.is_json:
                # JSON data
                data = request.get_json()
                
                ProductName = data.get("ProductName")
                Decription = data.get("Decription")
                price = data.get("price")
                originalPrice = data.get('originalPrice')
                discount = data.get('discount')
                cetagory = data.get('cetagory')

                # Note: You may need to adjust this part based on how you handle file uploads with JSON data
                image = None
            else:
                # Form data (multipart/form-data)
                data = request.form
                ProductName = data.get("ProductName")
                Decription = data.get("Decription")
                price = data.get("price")
                originalPrice = data.get('originalPrice')
                discount = data.get('discount')
                cetagory = data.get('cetagory')
                image = request.files['image']
                image_data = base64.b64encode(image.read()).decode('utf-8')

            # Use placeholders in the SQL query
            print(image)
            query = "INSERT INTO menu (name, category, description, image, price, originalPrice, discount) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(query, (ProductName, cetagory,Decription, image_data , price, originalPrice, discount))
            mydb.commit()
            message = f"Success: Data inserted for Name: {ProductName}, category {cetagory}, price: {price} image {image}"
            response = {'status': 'success', 'message': message}
        except Exception as e:
            message = f"Error: {str(e)}"
            response = {'status': 'error', 'message': message}


        return jsonify(response)
    
    if request.method =='GET':
        database_query = "SELECT * FROM menu "
        cursor.execute(database_query)
        menudata = cursor.fetchall()
        return jsonify(menudata)
    message = "Error: Method not allowed"
    response = {'status': False, 'message': message}
    return jsonify(response)



# Invalid request method
@app.route('/login', methods=['GET'])
def invalid_login():
    message = "Error: Method not allowed"
    response = {'status': False, 'message': message}
    return jsonify(response)





@app.route('/restorent', methods=['POST','GET'])
def restorent():
    try:
        if request.is_json:
            # JSON data
            data = request.get_json()
            full_name = data.get("full_name")
            email = data.get("email")
            address = data.get("address")
            description = data.get('description')
            image = request.files['file']
            subimage = request.files.getlist('files[]')
        
        else:
            # Form data (multipart/form-data)
            data = request.form
            full_name = data.get("full_name")
            email = data.get("email")
            address = data.get("address")
            city = data.get('city')
            description = data.get('description')
            image = request.files['file']
            imagename = os.path.join('Reastorentimg/Main', secure_filename(image.filename))
            image.save(imagename)
            file_paths = []
            subimage = request.files.getlist('files[]')
            for file in subimage:
                filename = os.path.join('Reastorentimg/Subimage', secure_filename(file.filename))
                file.save(filename)
                file_paths.append(filename)

        # Convert the list to a string using a delimiter (e.g., ';')
        file_paths_str = ';'.join(file_paths)

        query = "INSERT INTO restaurants (name, email, Address, city, Description, image, subimage) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(query, (full_name, email, address, city, description, imagename, file_paths_str))
        mydb.commit()
        message = f"Success: Data inserted for Name: {full_name}, address {address}, email {email}"
        response = {'status': 'success', 'message': message}
        print(query, (full_name, email, address, city, description, imagename, file_paths_str))
    except Exception as e:
        message = f"Error: {str(e)}"
        response = {'status': 'error', 'message': message}

    

    return jsonify(response)



if __name__ == "__main__":
    app.run(debug=True, port=1000)
