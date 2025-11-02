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

    // TODO: Add client-side validation
    // TODO: Add password strength validation

    try {
      const response = await this.submitSignup(signupData);
      this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
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
      throw new Error(`HTTP error! status: ${response.status}`);
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
