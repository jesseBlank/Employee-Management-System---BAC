package com.BACproject.server.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.BACproject.server.models.Employee;
import com.BACproject.server.models.LoginEmployee;
import com.BACproject.server.repositories.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	// register employee
	public Employee register(Employee newEmployee, BindingResult result) {
		// search db for employee
		Optional<Employee> employee = employeeRepository.findByEmail(newEmployee.getEmail());
		// validations
		// if user is already in db
		if (employee.isPresent()) {
			result.rejectValue("email", "Unique", "Must submit an email that is unique.");
		}
		// if passwords don't match
		if (!newEmployee.getPassword().equals(newEmployee.getConfirm())) {
			result.rejectValue("confirm", "Matches", "The confirm password must match password.");
		}
		// if errors exist return null or redirect to dashboard
		if (result.hasErrors()) {
			return null;
		}
		// has pw and add user to db
		String hashed = BCrypt.hashpw(newEmployee.getPassword(), BCrypt.gensalt());
		newEmployee.setPassword(hashed);
		;
		Employee registeredEmployee = employeeRepository.save(newEmployee);

		return registeredEmployee;
	}

	// login employee
	public Employee login(LoginEmployee newLoginObject, BindingResult result) {
		// search for user in db
		Optional<Employee> employee = employeeRepository.findByEmail(newLoginObject.getEmail());
		// validations
		// if email is incorrect
		if (!employee.isPresent()) {
			result.rejectValue("email", "unique", "Must submit a valid email.");
			return null;
		}
		Employee loggedEmployee = employee.get();
//		System.out.println("*****" + loggedEmployee.getPassword());
//		System.out.println("*****" + newLoginObject.getPassword());
		// check bcrypt if password matches
		if (!BCrypt.checkpw(newLoginObject.getPassword(), loggedEmployee.getPassword())) {
			result.rejectValue("password", "Matches", "Invalid Password.");
			return null;
		}
		return loggedEmployee;
	}

	// read one
	public Employee findOneEmployee(Long id) {
		Optional<Employee> optionalEmployee = employeeRepository.findById(id);
		if (optionalEmployee.isPresent()) {
			return optionalEmployee.get();
		} else {
			return null;
		}
	}
}
