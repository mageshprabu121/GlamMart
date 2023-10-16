package com.magesh.demo.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.magesh.demo.entities.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer> {

}
