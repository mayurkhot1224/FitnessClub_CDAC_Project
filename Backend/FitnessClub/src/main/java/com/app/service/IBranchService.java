package com.app.service;

import java.util.List;

import com.app.pojos.Branch;

public interface IBranchService {

	Branch addBranch(Branch m);

	Branch cascade(long id);

	Branch deleteBranch(long id);

	List<Branch> getBranches();

}
