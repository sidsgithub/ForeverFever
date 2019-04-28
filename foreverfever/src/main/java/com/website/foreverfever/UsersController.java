package com.website.foreverfever;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UsersController {
	private UserRepository repository;
	
	public UsersController(UserRepository repository)
	{
		this.repository = repository;
	}
	@GetMapping("/admin")
    @CrossOrigin(origins = "http://localhost:4200/admin")
    public Collection<User> admin() {
        return repository.findAll().stream()
                .collect(Collectors.toList());
    }

}
