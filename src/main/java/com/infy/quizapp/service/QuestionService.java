package com.infy.quizapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.infy.quizapp.entity.QuestionEntity;
import com.infy.quizapp.repository.QuestionRepository;

@Service
public class QuestionService {
	
	@Autowired
	QuestionRepository questionRepo;

	public ResponseEntity<List<QuestionEntity>> getAllQuestions() {
		try {
			return new ResponseEntity<>(questionRepo.findAll(), HttpStatus.OK);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}
	
	public ResponseEntity<List<QuestionEntity>> getQuestionByCategory(String category){
		try {
			return new ResponseEntity<>(questionRepo.findByCategory(category), HttpStatus.OK);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
		
	}

	public ResponseEntity<String> addQuestion(QuestionEntity question) {
		try {
			questionRepo.save(question);
			return new ResponseEntity<>("Success", HttpStatus.CREATED);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);

	}

	public ResponseEntity<String> deleteQuestion(Integer id) {
		try {
//			Optional<QuestionEntity> question = questionRepo.findById(id);
//			questionRepo.delete(question);
			Optional<QuestionEntity> question = questionRepo.findById(id);
			if (question.isPresent()) {
			    questionRepo.delete(question.get());
			} else {
			    // Handle not found case, maybe throw exception or log
			    throw new RuntimeException("Question not found with id: " + id);
			}
			return new ResponseEntity<>("Success", HttpStatus.OK);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);

	}
	
}
