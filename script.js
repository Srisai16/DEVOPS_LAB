
        // Toggle password visibility
        function togglePassword(fieldId) {
            const field = document.getElementById(fieldId);
            const icon = field.nextElementSibling.querySelector('i');
            
            if (field.type === 'password') {
                field.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                field.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        }

        // Password matching validation
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const passwordMatchError = document.getElementById('passwordMatchError');

        confirmPassword.addEventListener('input', () => {
            if (password.value !== confirmPassword.value) {
                passwordMatchError.classList.remove('hidden');
                confirmPassword.classList.add('border-red-500');
            } else {
                passwordMatchError.classList.add('hidden');
                confirmPassword.classList.remove('border-red-500');
            }
        });

        // Form submission
        const registrationForm = document.getElementById('registrationForm');
        const successModal = document.getElementById('successModal');

        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Check if passwords match
            if (password.value !== confirmPassword.value) {
                passwordMatchError.classList.remove('hidden');
                confirmPassword.classList.add('border-red-500');
                confirmPassword.classList.add('shake');
                setTimeout(() => {
                    confirmPassword.classList.remove('shake');
                }, 500);
                return;
            }

            // Validate password strength (optional)
            if (password.value.length < 8) {
                alert('Password must be at least 8 characters long');
                return;
            }

            // If all validations pass, show success modal
            successModal.classList.remove('hidden');
        });

        function closeModal() {
            successModal.classList.add('hidden');
            registrationForm.reset();
        }