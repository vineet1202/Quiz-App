package com.infy.quizapp.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;

@Entity
public class Quiz {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String title;
	 
	@ManyToMany
	@JoinTable(
		    name = "quiz_questions",
		    joinColumns = @JoinColumn(name = "quiz_id", referencedColumnName = "id"),
		    inverseJoinColumns = @JoinColumn(name = "question_id", referencedColumnName = "id")
		    )
	private List<QuestionEntity> questions;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<QuestionEntity> getQuestions() {
		return questions;
	}
 
	public void setQuestions(List<QuestionEntity> questions) {
		this.questions = questions;
	}
	
	
}
