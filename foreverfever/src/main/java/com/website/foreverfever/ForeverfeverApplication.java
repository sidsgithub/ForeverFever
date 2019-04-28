package com.website.foreverfever;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.website.foreverfever.User;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
public class ForeverfeverApplication {

	public static void main(String[] args) {
		SpringApplication.run(ForeverfeverApplication.class, args);
	}
	
	@Bean
    ApplicationRunner init(UserRepository repository) {
        return args -> {
                User user1 = new User();
                
                user1.setEmail("sidkool58@gmail.com");
                user1.setPassword("1234567");
                repository.save(user1);
                
                User user2 = new User();
                user2.setEmail("ritvik@gmial.com");
                user2.setPassword("12345");
                repository.save(user2);
                
            repository.findAll().forEach(System.out::println);
        };
}
}
