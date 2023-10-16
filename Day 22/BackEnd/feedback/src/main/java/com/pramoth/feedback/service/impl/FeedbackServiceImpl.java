package com.pramoth.feedback.service.impl;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pramoth.feedback.dto.request.FeedbackRequest;
import com.pramoth.feedback.dto.response.FeedbackResponse;
import com.pramoth.feedback.model.Feedback;
import com.pramoth.feedback.repository.FeedbackRepository;
import com.pramoth.feedback.service.FeedbackService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepository feedbackRepository;

    @Override
    public ResponseEntity<Feedback> saveFeedback(Feedback request) {
         try{
            Feedback saveFeedback = feedbackRepository.save(request);
            return new ResponseEntity<Feedback>(saveFeedback,HttpStatus.CREATED);
         }
         catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

         }
        
        
    }

    @Override
    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setQuestion(feedback.getQuestion());
                    response.setAnswer(feedback.getAnswer());
                    return response;
                })
                .collect(Collectors.toList());
    }
}
