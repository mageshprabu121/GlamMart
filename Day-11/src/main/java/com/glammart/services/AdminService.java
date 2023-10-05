package com.glammart.services;

import com.glammart.entities.Admin;

public interface AdminService {
	Admin validate(String userid,String pwd);
	void updateAdmin(Admin amin);
	long count();
	void createAdmin();
}
