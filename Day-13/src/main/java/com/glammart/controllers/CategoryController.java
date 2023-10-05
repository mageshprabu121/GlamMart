package com.glammart.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glammart.entities.Category;
import com.glammart.models.Response;
import com.glammart.services.CategoryService;

@CrossOrigin
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

	@Autowired private CategoryService cservice;
	
	@PostMapping
	public ResponseEntity<?> saveCategory(@RequestBody Category cat) {
		cservice.save(cat);
		return Response.success("Category saved");
	}
	
	@GetMapping
	public List<Category> listall(){
		return cservice.listAll();
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateCategory(@PathVariable("id") int id,@RequestBody Category cat){
		cservice.updateStatus(id, cat.isIsactive());
		return Response.success("Category updated successfully");
	}
}
