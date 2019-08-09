package com.example.demo.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Task;

public interface TaskRepo extends CrudRepository<Task, Integer> {
	@Modifying
	@Transactional
	@Query(value = "update task tas set tas.task_name = :newTask where tas.task_name = :origTask", nativeQuery = true)
	int editTaskInDB(@Param("origTask") String origTask, @Param("newTask") String newTask);
}
