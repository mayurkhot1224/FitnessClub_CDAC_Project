package com.app.service;

import java.util.List;

import com.app.pojos.Batch;

public interface IBatchService {

	Batch addNewBatch(Batch batch, long branchBranchId);

	List<Batch> getAllBatches();

	List<Batch> getBatchesByBranchId(long id);

	Batch updateBatch(Batch batch, long id);

	String deleteBatch(long id);

}
