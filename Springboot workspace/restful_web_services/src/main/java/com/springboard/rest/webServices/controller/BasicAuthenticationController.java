package com.springboard.rest.webServices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springboard.rest.webServices.bean.AuthenticationBean;
import com.springboard.rest.webServices.bean.HelloMessageBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController {
	
	@GetMapping(path = "/basicAuthentication")
	public AuthenticationBean helloMessage() {
		return new AuthenticationBean("You are Authenticated");
	}
}
