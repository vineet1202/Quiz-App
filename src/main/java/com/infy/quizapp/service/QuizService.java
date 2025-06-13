package com.infy.quizapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.infy.quizapp.dto.QuestionDTO;
import com.infy.quizapp.dto.Response;
import com.infy.quizapp.entity.QuestionEntity;
import com.infy.quizapp.entity.Quiz;
import com.infy.quizapp.repository.QuestionRepository;
import com.infy.quizapp.repository.QuizRepository;

@Service
public class QuizService {
	
	@Autowired
	QuizRepository quizRepo;
	
	@Autowired
	QuestionRepository quesRepo;

	public ResponseEntity<String> createQuiz(String category, int noOfQues, String title) {
		List<QuestionEntity> ques = quesRepo.findRandomQuestionsByCategory(category, noOfQues);
		
		Quiz quiz = new Quiz();
		quiz.setTitle(title);
		quiz.setQuestions(ques);
		
		quizRepo.save(quiz);
		
		return new ResponseEntity<>("Success", HttpStatus.CREATED);
	}

	public ResponseEntity<List<QuestionDTO>> getQuiz(Integer id) {
		Optional<Quiz> quiz = quizRepo.findById(id);
		
		List<QuestionEntity> questions = quiz.get().getQuestions();
		
		List<QuestionDTO> userQuestions = new ArrayList<>(); 
		
		for(QuestionEntity q : questions) {
			QuestionDTO qw = new QuestionDTO(
				q.getId(), q.getQuestionTitle(), q.getOption1(), q.getOption2(),q.getOption3(),q.getOption4());
				userQuestions.add(qw);
		}
		
		return new ResponseEntity<>(userQuestions, HttpStatus.OK);
	}

	public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
		Optional<Quiz> quiz = quizRepo.findById(id);
		
		List<QuestionEntity> questions = quiz.get().getQuestions();
		int count = 0;
		int index = 0;
		
		for(Response res : responses) {
			if(res.getResponse().equals(questions.get(index).getRightAnswer())){
				count++;
			}
			index++;
		}
		
		return new ResponseEntity<>(count, HttpStatus.OK);
	}
}
