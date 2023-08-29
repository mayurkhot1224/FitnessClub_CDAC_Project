package com.app.service;

import java.util.List;

import com.app.pojos.Trainer;
import com.app.pojos.User;

public interface ITrainerService {
	public Trainer registerTrainer(Trainer t, long id);

	public Trainer findByUserId(User uid);

	public Trainer deleteTrainer(long id);

	public Trainer setMembersNull(long id);

	public List<Trainer> getAlltrainers();

	public List<Trainer> getAlltrainers(long branchId);
}
