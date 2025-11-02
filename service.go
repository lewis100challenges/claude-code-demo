package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// User represents a user in the system
type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

// UserService handles user-related operations
type UserService struct {
	users []User
}

// NewUserService creates a new user service
func NewUserService() *UserService {
	return &UserService{
		users: make([]User, 0),
	}
}

// SignUp handles user registration
func (s *UserService) SignUp(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// TODO: Add input validation
	// TODO: Add password strength validation

	// Assign ID
	user.ID = len(s.users) + 1
	s.users = append(s.users, user)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}

// GetUsers returns all users
func (s *UserService) GetUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(s.users)
}

func main() {
	service := NewUserService()

	http.HandleFunc("/api/signup", service.SignUp)
	http.HandleFunc("/api/users", service.GetUsers)

	fmt.Println("Server starting on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
