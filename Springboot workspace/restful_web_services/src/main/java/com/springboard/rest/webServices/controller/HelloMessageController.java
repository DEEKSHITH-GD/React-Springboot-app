package com.springboard.rest.webServices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springboard.rest.webServices.bean.HelloMessageBean;

@RestController
@CrossOrigin(origins = "https://localhost:4200")
public class HelloMessageController {
	
	@GetMapping(path = "/hello-message-bean")
	public HelloMessageBean helloMessageBean() {
		return new HelloMessageBean("Hello Message");
	}
	
	@GetMapping(path = "/hello-message/path-variable/{name}")
	public HelloMessageBean helloMessagePathVariable(@PathVariable String name) {
		return new HelloMessageBean(String.format("Hello!, %s", name));
	}
}