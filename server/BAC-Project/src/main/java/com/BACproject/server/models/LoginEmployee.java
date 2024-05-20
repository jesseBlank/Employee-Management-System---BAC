package com.BACproject.server.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class LoginEmployee {
	
	@NotEmpty(message="Email is a required field.")
	@Email(message="Please enter a valid email.")
	private String email;
	
	@NotEmpty(message="Password is a required field.")
	@Size(min=8, message="Password must be at least 8 characters long.")
	private String password;
	
	// constructor
	public LoginEmployee() {
	}

	// getters and setters
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
