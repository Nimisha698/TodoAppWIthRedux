package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {

	private String taskName;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int taskId;

	public String getTaskName() {
		return taskName;
	}

	public void setEmpName(String taskName) {
		this.taskName = taskName;
	}

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	@Override
	public String toString() {
		return "Task[taskname=" + taskName + " taskId=" + taskId + "]";
	}
}
