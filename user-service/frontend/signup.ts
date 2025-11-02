// signup.ts - User registration form handler

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface SignupResponse {
  id: number;
  username: string;
  email: string;
}

class SignupForm {
  private form: HTMLFormElement;
  private apiUrl: string = 'http://localhost:8080/api/signup';

  constructor(formId: string) {
    const formElement = document.getElementById(formId);
    if (!formElement || !(formElement instanceof HTMLFormElement)) {
      throw new Error(`Form with id ${formId} not found`);
    }
    this.form = formElement;
    this.init();
  }

  private init(): void {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  private async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();

    const formData = new FormData(this.form);
    const signupData: SignupData = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    // Validate input
    const validationError = this.validateInput(signupData);
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const response = await this.submitSignup(signupData);
      this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  private validateInput(data: SignupData): string | null {
    // Validate username
    if (!data.username || data.username.trim() === '') {
      return 'Username is required';
    }
    if (data.username.length < 3 || data.username.length > 20) {
      return 'Username must be between 3 and 20 characters';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(data.username)) {
      return 'Username can only contain letters, numbers, and underscores';
    }

    // Validate email
    if (!data.email || data.email.trim() === '') {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return 'Please enter a valid email address';
    }

    // Validate password
    if (!data.password || data.password.trim() === '') {
      return 'Password is required';
    }
    if (data.password.length < 8) {
      return 'Password must be at least 8 characters long';
    }

    // Validate password strength
    if (!/[A-Z]/.test(data.password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(data.password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(data.password)) {
      return 'Password must contain at least one number';
    }

    return null;
  }

  private async submitSignup(data: SignupData): Promise<SignupResponse> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'An error occurred' }));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  private handleSuccess(response: SignupResponse): void {
    console.log('Signup successful:', response);
    alert(`Welcome, ${response.username}! Your account has been created.`);
    this.form.reset();
  }

  private handleError(error: unknown): void {
    console.error('Signup failed:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    alert(`Signup failed: ${message}`);
  }
}

// Initialize the signup form when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SignupForm('signup-form');
});

export { SignupForm, SignupData, SignupResponse };
