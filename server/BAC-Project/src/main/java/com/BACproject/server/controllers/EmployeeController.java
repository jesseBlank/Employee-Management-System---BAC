package com.BACproject.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BACproject.server.models.Employee;
import com.BACproject.server.models.LoginEmployee;
import com.BACproject.server.repositories.EmployeeRepository;
import com.BACproject.server.services.EmployeeService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/api")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private EmployeeService employeeService;

	// get all
	@GetMapping("/employees")
	public ResponseEntity<Object> allEmployee() {
		return ResponseEntity.ok().body(employeeRepository.findAll());
	}

	// register
	@PostMapping("/register")
	public ResponseEntity<Object> createClient(@Valid @RequestBody Employee employee, BindingResult result) {
		if (result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return ResponseEntity.status(400).body(result.getAllErrors());
		}
		Employee newEmployee = employeeService.register(employee, result);
		return ResponseEntity.ok().body(newEmployee);
	}

	// get one
	@GetMapping("/employees/{id}")
	public Employee showOneEmployee(@PathVariable Long id) {
		return employeeRepository.findById(id).orElseThrow(RuntimeException::new);
	}

	// login user
	@PostMapping("/login")
	public ResponseEntity<Object> loginEmployee(@Valid @RequestBody LoginEmployee newLogin, BindingResult result,
			HttpSession session) {
		// call upon employeeService
		Employee employee = employeeService.login(newLogin, result);
		// check for errors
		if (result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return ResponseEntity.status(400).body(result.getAllErrors());
		} else {
			// if no errors, add user to session
			session.setAttribute("email", employee.getEmail());
			session.setAttribute("employeeId", employee.getId());
			return ResponseEntity.ok().body(employee);
		}
	}

	@GetMapping("/logout")
	public String logoutEmployee(HttpSession session) {
		session.invalidate();
		return null;
	}

	// delete employee
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Object> deleteEmployee(@PathVariable("id") Long id) {
		employeeRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}

}
