const db = require('../configs/db');
const bcrypt = require('bcrypt');

class User {
  // Create a new user
  static async create(userData) {
    try {
      const { name, email, password } = userData;
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      // Insert user into database
      const result = await db.query(
        `INSERT INTO users (name, email, password) 
         VALUES ($1, $2, $3) 
         RETURNING id, name, email, created_at`,
        [name, email, hashedPassword]
      );
      
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  
  // Find user by email
  static async findByEmail(email) {
    try {
      const result = await db.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );
      
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  
  // Find user by ID
  static async findById(id) {
    try {
      const result = await db.query(
        'SELECT id, name, email, created_at FROM users WHERE id = $1',
        [id]
      );
      
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
