package com.glammart.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.glammart.entities.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, String> {

}
