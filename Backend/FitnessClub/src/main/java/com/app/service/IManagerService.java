package com.app.service;

import java.util.List;

import com.app.pojos.Manager;
import com.app.pojos.Member;
import com.app.pojos.Trainer;
import com.app.pojos.User;

public interface IManagerService {
	public Manager registerManager(Manager m, long id);

	public Manager findByUserId(User uid);

	public List<Member> getAllMembers(long id);

	public List<Trainer> getAllTrainers(long id);

	public Manager deleteManager(long id);

	public Manager registerManager(Manager m);

	public Manager addBranch(Manager manager, long id);

	public List<Manager> getAllManagers();

}
