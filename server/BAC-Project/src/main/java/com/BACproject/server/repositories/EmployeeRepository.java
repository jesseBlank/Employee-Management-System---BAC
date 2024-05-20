package com.BACproject.server.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.BACproject.server.models.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

	Optional<Employee> findByEmail(String email);

	List<Employee> findAll();

}
