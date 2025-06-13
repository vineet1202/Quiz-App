package com.infy.quizapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.infy.quizapp.entity.QuestionEntity;

@Repository
public interface QuestionRepository extends JpaRepository<QuestionEntity, Integer> {

	List<QuestionEntity> findByCategory(String category);

	@Query(value="SELECT * FROM Question q WHERE q.category=:category order by RAND() limit :noOfQues", nativeQuery = true)
	List<QuestionEntity> findRandomQuestionsByCategory(String category, int noOfQues);
	
	
}
