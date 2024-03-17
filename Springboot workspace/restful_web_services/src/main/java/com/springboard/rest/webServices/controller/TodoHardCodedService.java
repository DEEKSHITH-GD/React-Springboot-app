package com.springboard.rest.webServices.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.springboard.rest.webServices.bean.Todo;

@Service
public class TodoHardCodedService {
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "task1", "Learn to code", new Date(), false));
		todos.add(new Todo(++idCounter, "task2", "Learn Java", new Date(), false));
		todos.add(new Todo(++idCounter, "task3", "Learn about Microservices", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0){
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteTodoById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteTodoById(long id) {
		Todo todo = findById(id);
		System.out.println("done with find id ");
		System.out.println("id "+id+" todo: "+todo);
		if(todo == null) return null;
		System.out.println("todo not null ");
		if(todos.remove(todo)) {
			System.out.println("todo removed from todos ");
			return todo;
		}
		System.out.println("todo not removed end of it >null<");
		return null;
	}
	
	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				System.out.println("inside findById if ");
				return todo;
			}
		}
		System.out.println("inside findById outside if ");
		return null;
	}
}
