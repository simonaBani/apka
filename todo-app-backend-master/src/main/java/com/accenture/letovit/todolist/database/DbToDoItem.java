package com.accenture.letovit.todolist.database;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * This class represents a table in database (@Entity annotation is marking this class as a table)
 * One object instance of this class represents a single record in database.
 */
@Entity
public class DbToDoItem {
	
	// all tables must have unique ID column marked with @Id annotation
	@Id
	private String identifier;

	private String title;

	private String text;

	private boolean finished;

	private String createdAt;

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

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

}
