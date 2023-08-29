package com.app.service;

import com.app.pojos.Report;

public interface IReportService {

	Report registerReport(Report r, long customer_id);

	Report addWorkoutOrDiet(Report r, long customer_id);

	Report getReport(long customer_id);

}
