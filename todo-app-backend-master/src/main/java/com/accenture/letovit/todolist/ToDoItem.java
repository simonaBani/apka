package com.accenture.letovit.todolist;

import java.io.Serializable;

/**
 * This class represent todo json received from front-end. It contains all data about todo item.
 * It is converted from JSON to Java Object when request is received by Spring.
 */
public class ToDoItem implements Serializable {

	private String title; // variable must be called "title" - same as in JSON from front-end
	private String text; // variable must be called "text" - same as in JSON from front-end
	private boolean finished; // variable must be called "finished" - same as in JSON from front-end
	private String createdAt; // variable must be called "name" - same as in JSON from front-end
	private String id;
	private String finishedAt;
	private String startedAt;
	private String deadline;

	

	

	

	// Generated by Eclipse
	@Override
	public String toString() {
		return "ToDoItem [title=" + title + ", text=" + text + ", finished=" + finished + ", "
				+ "createdAt=" + createdAt + ",  finishedAt=" + finishedAt + ", "
						+ " startedAt=" + startedAt + ", " + " deadline=" + deadline + " ]";
	}

	// Setters and getters generated by Eclipse
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isFinished() {
		return finished;
	}

	public void setFinished(boolean finished) {
		this.finished = finished;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getFinishedAt() {
		return finishedAt;
	}

	public void setFinishedAt(String finishedAt) {
		this.finishedAt = finishedAt;
	}
	
	public String getStartedAt() {
		return startedAt;
	}

	public void setStartedAt(String startedAt) {
		this.startedAt = startedAt;
	}
	
	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}
}
