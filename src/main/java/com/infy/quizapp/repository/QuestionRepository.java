package com.infy.quizapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.infy.quizapp.entity.QuestionEntity;

@Repository
public interface QuestionRepository extends JpaRepository<QuestionEntity, Integer> {

	List<QuestionEntity> findByCategory(String category);

	@Query(value="SELECT * FROM question q WHERE LOWER(q.category) = LOWER(:category) ORDER BY RANDOM() LIMIT :noOfQues", nativeQuery = true)
    List<QuestionEntity> findRandomQuestionsByCategory(@Param("category") String category, @Param("noOfQues") int noOfQues);
	
}
