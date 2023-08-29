package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("select u from User u where u.email=:mail and u.password=:password")
	User findByEmailAndPassword(@Param("mail") String email, @Param("password") String password);

	@Modifying
	@Query("delete from User u where u.email=:email")
	void deleteByEmail(@Param("email") String email);

	User findByEmail(String email);
}
