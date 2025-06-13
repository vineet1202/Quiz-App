package com.infy.quizapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infy.quizapp.entity.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Integer>{
	
}
