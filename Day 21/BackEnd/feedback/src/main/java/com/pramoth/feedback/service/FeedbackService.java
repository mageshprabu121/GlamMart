package com.pramoth.feedback.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.pramoth.feedback.dto.request.FeedbackRequest;
import com.pramoth.feedback.dto.response.FeedbackResponse;
import com.pramoth.feedback.model.Feedback;

public interface FeedbackService {

    ResponseEntity<Feedback> saveFeedback(Feedback request);

    List<FeedbackResponse> getFeedbacks();

}
