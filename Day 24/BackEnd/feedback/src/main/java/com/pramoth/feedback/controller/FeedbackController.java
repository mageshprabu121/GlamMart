package com.pramoth.feedback.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pramoth.feedback.constant.Api;
import com.pramoth.feedback.dto.request.FeedbackRequest;
import com.pramoth.feedback.dto.response.FeedbackResponse;
import com.pramoth.feedback.model.Feedback;
import com.pramoth.feedback.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RestController

@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping("/postFeedback")
    public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback request) {
        return feedbackService.saveFeedback(request);
    }

    @GetMapping("/getAll")
    public List<FeedbackResponse> getFeedbacks() {
       return feedbackService.getFeedbacks();
        // return !feedbackList.isEmpty() ? ResponseEntity.ok(feedbackList) : ResponseEntity.noContent().build();
    }
}
