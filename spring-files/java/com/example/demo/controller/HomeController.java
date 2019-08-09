package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.dao.TaskRepo;
import com.example.demo.model.Task;

@RestController
public class HomeController {
	@Autowired
	TaskRepo repo;

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("addTask")
	public Task addEmployee(@RequestBody Task task) {
		repo.save(task);
		return task;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("deleteTask")
	public Task deleteEmployee(@RequestBody Task task) {
		repo.delete(task);
		return task;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("editTask")
	public int editEmployee(@RequestBody String[] tasks) {
		int updatedTask = repo.editTaskInDB(tasks[0], tasks[1]);
		return updatedTask;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("alltasks")
	@ResponseBody
	Iterable<Task> index() {
		return repo.findAll();
	}
}
