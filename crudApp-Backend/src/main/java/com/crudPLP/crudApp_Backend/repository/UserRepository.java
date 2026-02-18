package com.crudPLP.crudApp_Backend.repository;

import com.crudPLP.crudApp_Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
