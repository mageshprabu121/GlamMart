package com.magesh.demo.services;

import com.magesh.demo.entities.Admin;

public interface AdminService {
	Admin validate(String userid,String pwd);
	void updateAdmin(Admin amin);
	long count();
	void createAdmin();
}
