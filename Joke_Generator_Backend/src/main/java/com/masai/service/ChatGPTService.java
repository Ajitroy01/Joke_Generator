package com.masai.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ChatGPTService {
	  private final String apiKey = "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"; // Replace with your actual API key
	  private final String apiUrl = "https://api.openai.com/v1/chat/completions";

	  public ResponseEntity<String> generateJoke(String keyword) {
		    // Create a list of messages for the conversation history
		    List<Map<String, String>> messages = new ArrayList<>();

		    // System message (optional)
		    Map<String, String> systemMessage = new HashMap<>();
		    systemMessage.put("role", "system");
		    systemMessage.put("content", "You are a helpful assistant that tells jokes.");
		    messages.add(systemMessage);

		    // User message
		    Map<String, String> userMessage = new HashMap<>();
		    userMessage.put("role", "user");
		    userMessage.put("content", "Tell me a joke about " + keyword);
		    messages.add(userMessage);

		    // Specify the model you want to use
		    String model = "gpt-3.5-turbo"; // Replace with the desired model (e.g., "gpt-3.5-turbo")

		    // Create the request body with the conversation history and model parameter
		    Map<String, Object> requestBody = new HashMap<>();
		    requestBody.put("messages", messages);
		    requestBody.put("model", model);
		    requestBody.put("max_tokens", 50);

		    // Convert the request body to JSON
		    ObjectMapper objectMapper = new ObjectMapper();
		    String requestBodyJson;
		    try {
		        requestBodyJson = objectMapper.writeValueAsString(requestBody);
		    } catch (JsonProcessingException e) {
		        // Handle JSON serialization error
		        e.printStackTrace();
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating JSON request body.");
		    }

		    // Make an HTTP POST request to the ChatGPT API
		    HttpHeaders headers = new HttpHeaders();
		    headers.set("Authorization", "Bearer " + apiKey);
		    headers.setContentType(MediaType.APPLICATION_JSON);

		    HttpEntity<String> requestEntity = new HttpEntity<>(requestBodyJson, headers);

		    RestTemplate restTemplate = new RestTemplate();
		    ResponseEntity<String> responseEntity = restTemplate.exchange(apiUrl, HttpMethod.POST, requestEntity, String.class);

		    return responseEntity;
		}

   }
