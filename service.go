package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"regexp"
	"strings"
)

// User represents a user in the system
type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

// ErrorResponse represents an error response
type ErrorResponse struct {
	Error string `json:"error"`
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

// validateUser validates user input
func validateUser(user User) error {
	// Validate username
	if strings.TrimSpace(user.Username) == "" {
		return fmt.Errorf("username is required")
	}
	if len(user.Username) < 3 || len(user.Username) > 20 {
		return fmt.Errorf("username must be between 3 and 20 characters")
	}
	usernameRegex := regexp.MustCompile(`^[a-zA-Z0-9_]+$`)
	if !usernameRegex.MatchString(user.Username) {
		return fmt.Errorf("username can only contain letters, numbers, and underscores")
	}

	// Validate email
	if strings.TrimSpace(user.Email) == "" {
		return fmt.Errorf("email is required")
	}
	emailRegex := regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)
	if !emailRegex.MatchString(user.Email) {
		return fmt.Errorf("please enter a valid email address")
	}

	// Validate password
	if strings.TrimSpace(user.Password) == "" {
		return fmt.Errorf("password is required")
	}
	if len(user.Password) < 8 {
		return fmt.Errorf("password must be at least 8 characters long")
	}

	// Validate password strength
	if !regexp.MustCompile(`[A-Z]`).MatchString(user.Password) {
		return fmt.Errorf("password must contain at least one uppercase letter")
	}
	if !regexp.MustCompile(`[a-z]`).MatchString(user.Password) {
		return fmt.Errorf("password must contain at least one lowercase letter")
	}
	if !regexp.MustCompile(`[0-9]`).MatchString(user.Password) {
		return fmt.Errorf("password must contain at least one number")
	}

	return nil
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
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Invalid request body"})
		return
	}

	// Validate user input
	if err := validateUser(user); err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ErrorResponse{Error: err.Error()})
		return
	}

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
