package com.accenture.letovit.todolist;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * This class represent todo json received from front-end. It contains flag about todo item finish state.
 * It is converted from JSON to Java Object when request is received by Spring.
 */
public class UpdateRequest {
	private boolean finished;
	private String finishedAt;
	private String startedAt;

	public boolean isFinished() {
		return finished;
	}

	public void setFinished(boolean finished) {
		this.finished = finished;
	}

	public String finishedAt() {
		return finishedAt;
	}
	
	public String startedAt() {
		return startedAt;
	}
	
	public String setDate() {
		
		LocalDateTime now = LocalDateTime.now();
		return this.finishedAt = DateTimeFormatter.ISO_DATE_TIME.format(now);
	}

	
}
